import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cneviwcqqcpyclthpsgg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZXZpd2NxcWNweWNsdGhwc2dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjc2NTIsImV4cCI6MjAyNzY0MzY1Mn0.hfmY3xcKkIFcTiAuu04oUBDKYK4jJXC5io9n3dVs_ig";
export const supabase = createClient(supabaseUrl, supabaseKey);
