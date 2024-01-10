import { useState } from "react";
import { CardFull } from "../card/CardFull";
import { StructureCardIndex } from "../StructureCardIndex";
import { ShowFavorites } from "./ShowFavorites";
import { FormCreatePeople } from "./FormCreatePeople";
import { FormUploadFile } from "./FormUploadFile";
import { ShowFiles } from "./ShowFiles";

type SECCTIONS = 'PERSONAL'|'CREAR_FILES'|'VER_FILES'|'FAVORITES' 

export const InicioDirect = () => {
    const [secction, setSecction] = useState<SECCTIONS | null>(null);


    return (
        <section className='grid grid-cols-[.5fr_1fr] grid-rows-4 p-5 gap-5 relative max-h-[100vh]'>
            <StructureCardIndex setSecction={setSecction} title="Personal" valueScction="PERSONAL" />
            <div className='row-span-4 relative max-h-[90vh]'>
                <CardFull scrol={true}>
                    { secction == 'FAVORITES' && <ShowFavorites /> /*  */} 
                    { secction == 'PERSONAL' && <FormCreatePeople /> /* READY */}
                    { secction == 'CREAR_FILES' && <FormUploadFile /> /* READY */}
                    { secction == 'VER_FILES' && <ShowFiles /> /*  */}
                </CardFull>
            </div>
            <StructureCardIndex setSecction={setSecction} title="Subir Archivo" valueScction="CREAR_FILES" />

            <StructureCardIndex setSecction={setSecction} title="Ver Archivos" valueScction="VER_FILES" />

            <StructureCardIndex setSecction={setSecction} title="Favorites" valueScction="FAVORITES" />
        </section>
    );
}
