import { Dispatch, FC, SetStateAction } from "react";
import { Carrousel } from "../default/Carrousel";

interface Props {
    change: Dispatch<SetStateAction<boolean>>
}

export const IndexPreviwGallery: FC<Props> = ({ change }) => {

    return (
        <section className='flex flex-col justify-center items-center w-[90%] md:w-[70%] place-items-center min-h-screen'>
            <h3 className='font-bebas text-6xl text-gray-700'>Galeria Interactiva De La Institución</h3>
            <button onClick={()=> change(true) } className='bg-amber-500 hover:bg-amber-300 duration-200 px-8 py-2 rounded-md font-bold text-white my-5'>Ver más</button>
            <Carrousel />
        </section>
    );
} 
