import { useState } from "react";
import { CardFull } from "../card/CardFull";
import { ShowFavorites } from "./ShowFavorites";
import { FormUploadFile } from "./FormUploadFile";
import { ShowFiles } from "./ShowFiles";

export const InicioTeacher = () => {
    const [favorites, setFavorites] = useState(false);

    return (
        <section className='grid p-5 gap-5 relative min-h-[90vh]'>
            <div className='relative max-h-[90vh] grid grid-cols-1 lg:grid-cols-[.5fr_1fr] gap-x-4 grid-rows-[100%] '>
                <CardFull>
                    <FormUploadFile />  
                </CardFull>
                <CardFull scrol={true}>
                    <button 
                        onClick={()=>setFavorites(!favorites)}
                        className='bg-amber-500 hover:bg-amber-600 duration-200 px-4 py-2 text-sm font-mono text-white rounded-md'
                    >
                        { favorites ? 'ver todos' : 'ver favoritos' }
                    </button>
                    { favorites ? <ShowFavorites /> : <ShowFiles /> }
                </CardFull>
            </div>
        </section>
    );
}
