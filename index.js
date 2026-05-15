import { createClient } 
from '@supabase/supabase-js'

const supabaseUrl = "https://rwywmafplybrzwaenupc.supabase.co"
const supabaseKey = "sb_publishable_iNanHaHmKct4qPZK_SfG1A_dnM3v4ME"

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


