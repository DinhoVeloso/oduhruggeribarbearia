import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mmyjbmvdfrkxytnxfkgc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1teWpibXZkZnJreHl0bnhma2djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1MDg5NTYsImV4cCI6MjA5MTEwODQ5NTZ9.2WRtkNeBcvHtmqYq7VVfmewxJIj13DQH0BG3cCdSq-4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Service = {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    created_at: string;
};

export type Appointment = {
    id: string;
    client_name: string;
    client_phone: string | null;
    service_id: string;
    appointment_date: string;
    appointment_time: string;
    status: string;
    created_at: string;
};
