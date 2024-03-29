import { useEffect, useState } from "react";
import { Post } from "../../types/post.d";
import { CardFiles } from "../card/CardFiles";
import UserService from '../../service/ServiceUser';
import { TitleText } from "../text/TitleText";

export const ShowFiles = () => {
    const [postList, setPostList] = useState<Post[] | null>(null);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const Get = async () => {
            const response = await UserService.GetPost({ description: undefined });
            if(response == 'DANGER') {
                setError(true);
                return setLoad(false);
            };
            setError(false);
            setLoad(false);
            return setPostList(response.body);
        }

        Get();
    },[reload])

    return (
        <>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-5'>
                {
                    error 
                    ?  <TitleText text='Error al cargar las publicaciones' />
                    :  load
                    ?   <TitleText text='Cargando publicaciones...' />
                    :  postList
                    ?  <>
                        {
                            postList.map((item) => ( <CardFiles update={()=>setReload(!reload)} favorite={false} key={item._id} post={item} /> ))
                        }
                       </>
                    : <>
                        <TitleText text='No hay publicaciones' />
                    </>
                }
            </section>
        </>
    );
}
