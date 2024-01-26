import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import UserService from '../../service/ServiceUser';
import { Post } from "../../types/post";
import { URL } from "../../constans.d";

interface Props {
    change: Dispatch<SetStateAction<boolean>>
}

export const IndexGallery: FC<Props> = ({ change }) => {
    const [images, setImages] = useState<Post[] | null>(null);
    const [error, setError] = useState(false);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const GetPublic = async () => {
            setLoad(true);
            setError(false);
            const response = await UserService.GetPublics();
            if(response === 'DANGER') {
                setLoad(false);
                return setError(true);
            }
            
            setImages(response.body);

            setLoad(false);
            setError(false);
        }

        GetPublic();
    }, [])

    return (
        <section className='flex flex-col justify-center items-center w-[100%] md:w-[70%] place-items-center min-h-screen'>
            <h3 className='font-bebas text-6xl text-gray-700'>Galeria</h3>
            <button onClick={()=> change(false) } className='bg-amber-500 hover:bg-amber-300 duration-200 px-8 py-2 rounded-md font-bold text-white my-5'>volver</button>
            
            <div className='grid grid-cols-1 place-items-center'>
                { 
                    error && !load
                    ? <h3 className='font-bebas text-3xl text-red-700'>Opss... algo salió mal</h3>
                    :load && !error 
                    ? <h3 className='font-bebas text-3xl text-amber-700'>cargando...</h3>
                    : !load && !error && images && 
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1'>
                        {
                            images.length > 0
                            ? <>
                                {
                                    images.map((item) => (
                                        <aside className='rounded-xl p-1'>
                                            <img src={`${URL}storage/${item.file_save_name}`} className='rounded-lg w-full h-[300px] object-cover' />
                                        </aside>
                                    ))
                                }
                            </>
                            : <h3 className='font-bebas text-3xl text-amber-700'>No existen imagenes públicas</h3>
                        }
                    </div>
                }   
            </div>

        </section>
    );
} 
