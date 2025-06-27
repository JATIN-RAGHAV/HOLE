import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../database.types";

const supabaseUrl = "https://xhssktbpfrdvlqhhtlxf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhoc3NrdGJwZnJkdmxxaGh0bHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NDc0NzEsImV4cCI6MjA2NjMyMzQ3MX0.uaofFUzcu9gBx8RlQ6xcinS7Lp9MWxuRRg5AKv0zHSM";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
        
