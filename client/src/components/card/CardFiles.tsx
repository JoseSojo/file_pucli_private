import { FC } from "react";
import { Post } from "../../types/post";
import { OpacityText } from "../text/OpacityText";
import { TitleText } from "../text/TitleText";

interface Props {
    post: Post 
}

export const CardFiles: FC<Props> = ({ post }) => {

    const clsButton = 'h-full w-[120px] rounded-md border-2 text-bold hover:text-white duration-200 font-bold text-sm';
                

    return (
        <aside className='w-full h-full grid grid-cols-1 grid-rows-[200px_100px_60px] gap-3 shadow bg-white rounded-md'>
            <img src={post.file_reference.save_name} className='w-full h-full bg-gray-400 rounded-t-md' />
            <header className='px-5 grid'>
                <TitleText text={`${post.user_reference.name} ${post.user_reference.lastname}`} />
                <OpacityText text={post.description} />
            </header>
            <footer className='flex justify-center items-center gap-3 py-3'>
                <button className={`${clsButton} border-emerald-500 text-emerald-500 hover:bg-emerald-500`}>
                    DESCARGAR
                </button>
                <button className={`${clsButton} border-amber-500 text-amber-500 hover:bg-amber-500`}>
                    FAVORITOS
                </button>
            </footer>
        </aside>
    )
}
