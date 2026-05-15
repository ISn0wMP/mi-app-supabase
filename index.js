import { createClient } 
from '@supabase/supabase-js'

const supabaseUrl = "https://rwywmafplybrzwaenupc.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3eXdtYWZwbHlicnp3YWVudXBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NTc0MDYsImV4cCI6MjA5NDQzMzQwNn0.hh4XSQppQ2bHPN9v1KYLTneXnqzystr9dOglbohhhzQ"

const supabase = createClient(supabaseUrl, supabaseKey)


async function obtenerEstudiantes()
{
        const { data, error } = await supabase
        .from('estudiantes')
        .select('*')

        if (error) {
                console.log('Error:', error)
        } else {
                console.log('Datos:', data)
        }
} obtenerEstudiantes()


