import { useState } from "react";
import { Post } from "../../types/post.d";
import IMG from '../../assets/react.svg';
import { CardFiles } from "../card/CardFiles";


const MOCK: Post = {
    creathe_by: 'id user',
    creathe_date: 'una fecha',
    description: 'una descripcion no tan larga',
    file_id: 'id del file',
    type_post: "PRIVATE",
    file_reference: {
        originalname: 'nombre original',
        save_name: IMG,
        size: 'tamaño',
        type: 'type/file'
    },
    user_reference: {
        _id: 'id del creado',
        ci: '28482348',
        created_date: 'creado en',
        email: 'correo@gmail.com',
        lastname: 'Apellido',
        name: 'nombre',
        role: 'DIRECT'
    }
} 

export const ShowFiles = () => {
    const [postList] = useState<Post[]>([MOCK])

    return (
        <>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-5'>
                {
                    postList.map((item) => ( <CardFiles post={item} /> ))
                }
            </section>
        </>
    );
}
