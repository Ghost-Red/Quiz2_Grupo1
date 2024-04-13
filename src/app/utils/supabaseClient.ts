import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = 'https://edovdmvsuzclzsjexnhx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkb3ZkbXZzdXpjbHpzamV4bmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NTk5NTMsImV4cCI6MjAyODUzNTk1M30.9kF8HMnkt5QNGOkjZgHYJ6jW84VZNxXLbAxIUqBinrY'

export const supabase = createClient(supabaseUrl,supabaseKey)