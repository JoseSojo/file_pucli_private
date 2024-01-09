import { Dispatch, FC, SetStateAction } from "react";
import { CardFull } from "./card/CardFull";
import { TitleText } from "./text/TitleText";

type SECCTIONS = 'PERSONAL'|'CREAR_FILES'|'VER_FILES'|'ACTIVITIES' 

interface Props {
    title: string,
    setSecction: Dispatch<SetStateAction<SECCTIONS | null>>,
    valueScction: SECCTIONS
}

export const StructureCardIndex: FC<Props> = ({ title, setSecction, valueScction }) => {

    return (
        <CardFull>
            <div className='w-full h-full flex flex-col gap-6'>
                <TitleText text={title} />
                <button 
                    onClick={()=>setSecction(valueScction)}
                    className='w-[50%] relative mx-auto font-bold bg-amber-600 hover:bg-amber-500 duration-200 text-white font-mono text-lg rounded-md py-3'>
                    crear
                </button>
            </div>
        </CardFull>
    )
}
