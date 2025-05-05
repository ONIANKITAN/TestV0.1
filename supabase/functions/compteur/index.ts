// supabase/functions/compteur/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve((_req) => {
  return new Response("Fonction Edge Supabase test OK ✅");
});
