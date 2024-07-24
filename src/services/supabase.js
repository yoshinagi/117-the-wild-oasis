import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xmnccyqitwqmwmgzurtf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtbmNjeXFpdHdxbXdtZ3p1cnRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2NTAxNzEsImV4cCI6MjAzNzIyNjE3MX0.qP6GrnrKlyYHVC7advfLXbqucdGxrjA2OucFWUP4icc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
