import { FC } from "react";
import { Post } from "../../types/post";
import { OpacityText } from "../text/OpacityText";
import { URL } from "../../constans.d";
import ServiceUser from '../../service/ServiceUser';
import { useNotification } from "../../context/NotiContext";

interface Props {
    update: () => void,
    post: Post,
    favorite: boolean
}

export const CardFiles: FC<Props> = ({ post,favorite, update }) => {
    const noti = useNotification();
    const file = post.file_reference[0];
    const url = `${URL}storage/${file.save_name}`;
    const clsButton = 'h-full w-[120px] rounded-md border-2 text-bold hover:text-white duration-200 font-bold text-sm flex justify-center items-center ';
    const mathcImg = file.type.includes('image') ?true :false;

    const HandleClickSetFavorite = ({ _id }: {_id:string}) => {
        const SetFavorite = async () => {
            const response = await ServiceUser.SetFavorite({_id});
            if(response === 'SUCCESS_FAVORITE_CREATE') noti.setNotification({type:'SUCCESS',status:true,message:'agregado a favoritos'});
            if(response === 'SUCCESS_FAVORITE_DELETE') noti.setNotification({type:'SUCCESS',status:true,message:'eliminado de favoritos'});
            update();
        }
        SetFavorite();
    }

    return (
        <aside className='w-full h-full grid grid-cols-1 grid-rows-[200px_auto_60px] gap-3 shadow bg-white rounded-md'>
            {
                mathcImg
                ? <img src={url} className='w-full h-full bg-gray-400 rounded-t-md' />
                : <p className='text-center font-bold text-gray-300 text-lg font-mono bg-gray-600 rounded-t-md flex justify-center items-center'>
                    {file.type}
                </p>
            }
            <header className='px-5 grid'>
                <OpacityText text={post.description} />
            </header>
            <footer className='flex justify-center items-center gap-3 py-3'>
                <a href={url} target="_blank" className={`${clsButton} border-emerald-500 text-emerald-500 hover:bg-emerald-500`}>
                    VER
                </a>
                <button 
                    onClick={()=>HandleClickSetFavorite({_id:post._id})}
                    className={`${clsButton} border-amber-500 text-amber-500 hover:bg-amber-500`}
                >
                    {
                        favorite
                        ?'DESCARTAR'
                        :'FAVORITOS'
                    }
                </button>
            </footer>
        </aside>
    );
}
