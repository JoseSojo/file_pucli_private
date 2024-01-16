import { useState } from "react";
import { CardFull } from "../card/CardFull";
import { StructureCardIndex } from "../StructureCardIndex";
import { ShowFavorites } from "./ShowFavorites";
import { FormUploadFile } from "./FormUploadFile";
import { ShowFiles } from "./ShowFiles";
import { PersonalDirect } from "./PersonalDirect";

type SECCTIONS = 'PERSONAL'|'CREAR_FILES'|'VER_FILES'|'FAVORITES' 

export const InicioDirect = () => {
    const [secction, setSecction] = useState<SECCTIONS | null>(null);


    return (
        <section className='grid grid-cols-1 lg:grid-cols-[.5fr_1fr] grid-rows-[auto_auto] lg:grid-rows-1 p-5 gap-5 relative max-h-[100vh]'>
            <div className='grid grid-cols-1 gap-2'>
                <StructureCardIndex setSecction={setSecction} title="Personal" valueScction="PERSONAL" />
                
                <StructureCardIndex setSecction={setSecction} title="Subir Archivo" valueScction="CREAR_FILES" />

                <StructureCardIndex setSecction={setSecction} title="Ver Archivos" valueScction="VER_FILES" />

                <StructureCardIndex setSecction={setSecction} title="Favorites" valueScction="FAVORITES" />
            </div>
            <div className='relative max-h-[90vh]'>
                <CardFull scrol={true}>
                    { secction == 'FAVORITES' && <ShowFavorites /> /*  */} 
                    { secction == 'PERSONAL' && <PersonalDirect /> /* READY */}
                    { secction == 'CREAR_FILES' && <FormUploadFile /> /* READY */}
                    { secction == 'VER_FILES' && <ShowFiles /> /*  */}
                </CardFull>
            </div>
        </section>
    );
}
