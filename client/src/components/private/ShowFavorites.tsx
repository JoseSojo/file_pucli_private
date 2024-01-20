import { useEffect, useState } from "react";
import { BodyFavorite } from "../../types/post.d";
import { CardFiles } from "../card/CardFiles";
import UserService from '../../service/ServiceUser';
import { TitleText } from "../text/TitleText";

export const ShowFavorites = () => {
    const [postList, setPostList] = useState<BodyFavorite[] | null>(null);
    const [error, setError] = useState(false);
    const [load, setLoad] = useState(true);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const Get = async () => {
            const response = await UserService.GetFavorites({ description: undefined });

            if(response == 'DANGER') {
                setLoad(false);
                return setError(true);
            };
            if(response.body.length > 0 && response.body[0] !== null){
                console.log(response.body);
                setPostList(response.body);
            }
            setLoad(false);
            setError(false);
            return;
        }

        Get();
    }, [reload]);

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
                            postList && postList.length > 0 && postList[0].post_reference.map((item) => (
                                <CardFiles update={()=>setReload(!reload)} favorite={false} key={item._id} post={item} /> 
                            ))
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
