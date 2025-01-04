import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://amksxtbujfaiobdzutxa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFta3N4dGJ1amZhaW9iZHp1dHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5NjM4NTksImV4cCI6MjA1MTUzOTg1OX0.K0zzLJ4L24XncvmZu9wgSSuQ6TRkkibmay75Trpf2Rk";

export const supabase = createClient(supabaseUrl, supabaseKey);
