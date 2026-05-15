import { createClient } 
from '@supabase/supabase-js'

const supabaseUrl = "https://rwywmafplybrzwaenupc.supabase.co"
const supabaseKey = "sb_secret_2j40U9utjbM7u71sHCKrlA_Pcou1vX1"

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


