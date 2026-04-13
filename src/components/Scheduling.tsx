import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Check, User, Phone, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase, type Service } from "@/lib/supabase";

export const Scheduling = () => {
    const [date, setDate] = useState<Date>();
    const [selectedService, setSelectedService] = useState<string>("");
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [services, setServices] = useState<Service[]>([]);
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
          const fetchServices = async () => {
                  const { data, error } = await supabase
                    .from('services')
                    .select('*')
                    .order('category', { ascending: true })
                    .order('name', { ascending: true });

                  if (data) setServices(data);
          };

                  fetchServices();
    }, []);

    useEffect(() => {
          const fetchSlots = async () => {
                  if (date) {
                            const formattedDate = format(date, 'yyyy-MM-dd');
                            const { data, error } = await supabase.rpc('get_available_slots', {
                                        appointment_day: formattedDate
                            });

                    if (data) {
                                setAvailableSlots(data);
                    } else {
                                setAvailableSlots([]);
                    }
                  }
          };

                  fetchSlots();
    }, [date]);

    const handleConfirm = async () => {
          if (!date || !selectedService || !selectedTime || !name || !phone) {
                  toast({
                            title: "Campos incompletos",
                            description: "Por favor, preencha todos os campos para agendar.",
                            variant: "destructive",
                  });
                  return;
          }

          setLoading(true);

          try {
                  const formattedDate = format(date, 'yyyy-MM-dd');

            const { error } = await supabase
                    .from('appointments')
                    .insert({
                                client_name: name,
                                client_phone: phone,
                                service_id: selectedService,
                                appointment_date: formattedDate,
                                appointment_time: selectedTime,
                                status: 'confirmed'
                    });

            if (error) {
                      if (error.message.includes('Horario ocupado') || error.message.includes('indisponivel')) {
                                  toast({
                                                title: "Horario ocupado",
                                                description: "Este horario acabou de ser preenchido. Por favor, escolha outro.",
                                                variant: "destructive",
                                  });
                      } else {
                                  throw error;
                      }
                      return;
            }

            const selectedServiceObj = services.find(s => s.id === selectedService);
                  const message = `Ola! Gostaria de confirmar meu agendamento:\n\n` +
                            `Nome: ${name}\n` +
                            `Servico: ${selectedServiceObj?.name}\n` +
                            `Data: ${format(date, "dd/MM/yyyy")}\n` +
                            `Horario: ${selectedTime}`;

            const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");

            toast({
                      title: "Agendamento realizado!",
                      description: "Seu horario foi reservado com sucesso.",
            });

            // Clear form
            setSelectedTime("");
                  setName("");
                  setPhone("");

          } catch (error) {
                  console.error(error);
                  toast({
                            title: "Erro ao agendar",
                            description: "Ocorreu um erro ao processar seu agendamento. Tente novamente.",
                            variant: "destructive",
                  });
          } finally {
                  setLoading(false);
          }
    };

    const categories = Array.from(new Set(services.map(s => s.category)));

    return (
          <section id="agendamento" className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                                  <div className="text-center mb-12">
                                              <h2 className="text-3xl md:text-4xl font-bold mb-4">Agende seu Horario</h2>h2>
                                              <p className="text-muted-foreground">Escolha o melhor momento para cuidar do seu visual</p>p>
                                  </div>div>
                        
                                  <div className="grid md:grid-cols-2 gap-8 bg-background p-6 rounded-2xl shadow-lg border border-border">
                                              <div className="space-y-6">
                                                            <div className="space-y-2">
                                                                            <label className="text-sm font-medium flex items-center gap-2">
                                                                                              <User className="w-4 h-4" /> Nome Completo
                                                                            </label>label>
                                                                            <Input 
                                                                                                placeholder="Seu nome" 
                                                                              value={name}
                                                                                                onChange={(e) => setName(e.target.value)}
                                                                                              />
                                                            </div>div>
                                              
                                                            <div className="space-y-2">
                                                                            <label className="text-sm font-medium flex items-center gap-2">
                                                                                              <Phone className="w-4 h-4" /> WhatsApp
                                                                            </label>label>
                                                                            <Input 
                                                                                                placeholder="(00) 00000-0000" 
                                                                              value={phone}
                                                                                                onChange={(e) => setPhone(e.target.value)}
                                                                                              />
                                                            </div>div>
                                              
                                                            <div className="space-y-2">
                                                                            <label className="text-sm font-medium flex items-center gap-2">
                                                                                              <Scissors className="w-4 h-4" /> Servico
                                                                            </label>label>
                                                                            <Select value={selectedService} onValueChange={setSelectedService}>
                                                                                              <SelectTrigger>
                                                                                                                  <SelectValue placeholder="Selecione um servico" />
                                                                                                </SelectTrigger>SelectTrigger>
                                                                                              <SelectContent>
                                                                                                {categories.map(category => (
                                  <div key={category}>
                                                          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase bg-muted/50">
                                                            {category}
                                                          </div>div>
                                    {services.filter(s => s.category === category).map(service => (
                                                              <SelectItem key={service.id} value={service.id}>
                                                                {service.name} - {service.price}
                                                              </SelectItem>SelectItem>
                                                            ))}
                                  </div>div>
                                ))}
                                                                                                </SelectContent>SelectContent>
                                                                            </Select>Select>
                                                            </div>div>
                                              </div>div>
                                  
                                              <div className="space-y-6">
                                                            <div className="space-y-2">
                                                                            <label className="text-sm font-medium flex items-center gap-2">
                                                                                              <CalendarIcon className="w-4 h-4" /> Data
                                                                            </label>label>
                                                                            <Popover>
                                                                                              <PopoverTrigger asChild>
                                                                                                                  <Button
                                                                                                                                          variant={"outline"}
                                                                                                                                          className={cn(
                                                                                                                                                                    "w-full justify-start text-left font-normal",
                                                                                                                                                                    !date && "text-muted-foreground"
                                                                                                                                                                  )}
                                                                                                                                        >
                                                                                                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                                                                                    {date ? format(date, "PPP") : "Selecione uma data"}
                                                                                                                    </Button>Button>
                                                                                                </PopoverTrigger>PopoverTrigger>
                                                                                              <PopoverContent className="w-auto p-0">
                                                                                                                  <Calendar
                                                                                                                                          mode="single"
                                                                                                                                          selected={date}
                                                                                                                                          onSelect={setDate}
                                                                                                                                          disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                                                                                                                                          initialFocus
                                                                                                                                        />
                                                                                                </PopoverContent>PopoverContent>
                                                                            </Popover>Popover>
                                                            </div>div>
                                              
                                                            <div className="space-y-2">
                                                                            <label className="text-sm font-medium flex items-center gap-2">
                                                                                              <Clock className="w-4 h-4" /> Horario
                                                                            </label>label>
                                                                            <div className="grid grid-cols-3 gap-2">
                                                                              {availableSlots.length > 0 ? (
                                availableSlots.map((time) => (
                                                        <Button
                                                                                  key={time}
                                                                                  variant={selectedTime === time ? "default" : "outline"}
                                                                                  className="text-sm"
                                                                                  onClick={() => setSelectedTime(time)}
                                                                                >
                                                          {time}
                                                        </Button>Button>
                                                      ))
                              ) : (
                                <div className="col-span-3 text-center py-4 text-muted-foreground text-sm italic">
                                  {date ? "Nenhum horario disponivel para esta data." : "Selecione uma data para ver os horarios."}
                                </div>div>
                                                                                              )}
                                                                            </div>div>
                                                            </div>div>
                                              
                                                            <Button 
                                                                              className="w-full h-12 text-lg" 
                                                              onClick={handleConfirm}
                                                                              disabled={loading}
                                                                            >
                                                              {loading ? "Processando..." : (
                                                                                                <>
                                                                                                                    <Check className="w-5 h-5 mr-2" /> Confirmar Agendamento
                                                                                                  </>>
                                                                                              )}
                                                            </Button>Button>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </div>div>
          </section>section>
        );
};</></section>
