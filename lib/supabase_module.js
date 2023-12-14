import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mtjoapjnvbqhrqrukifj.supabase.co";
const supabaseAnonKey =
  " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10am9hcGpudmJxaHJxcnVraWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NjMzNzcsImV4cCI6MjAxODAzOTM3N30.sLeSXFvC36PYpnbQyZajgykAtnxhUmk_7paKpvLawxs";

export const supabase_module = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
