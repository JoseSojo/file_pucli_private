import { useState } from "react"
import { InicioDirect } from "../../components/private/InicioDirect";
import { FilesDirect } from "../../components/private/FilesDirect";
import { PersonalDirect } from "../../components/private/PersonalDirect";

type PagesPayload = 'INICIO' | 'FILES' | 'PERSONAL'

export const DirectPage = () => {
    const [payload, setPayload] = useState<PagesPayload>('INICIO');

    return (
        <>
            <header className='w-full px-10 bg-amber-300 flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Juan German Roscio</h1>

                <ul className='flex'>
                    <li onClick={()=> setPayload('INICIO')} className='font-bold text-sm font-mono list-none p-6 hover:bg-amber-500 duration-200'>inicio</li>
                    <li onClick={()=> setPayload('FILES')} className='font-bold text-sm font-mono list-none p-6 hover:bg-amber-500 duration-200'>archivos</li>
                    <li onClick={()=> setPayload('PERSONAL')} className='font-bold text-sm font-mono list-none p-6 hover:bg-amber-500 duration-200'>personal</li>
                </ul>
            </header>

            {
                  payload == "INICIO" ? <InicioDirect />
                : payload == 'FILES'  ? <FilesDirect />
                : payload == 'PERSONAL'  ? <PersonalDirect />
                : <span>vas a salir</span>
            }

        </>
    )
}
