import { useState } from "react";
import { FormCreatePeople } from "./FormCreatePeople";
import { ListPeople } from "./ListPeople";

export const PersonalDirect = () => {

    const [create, setCreate] = useState(true);

    return (
        <section className='grid grid-rows-[auto_auto]'>
            <button
                className='text-white bg-amber-600 hover:bg-amber-500 w-[50%] py-3 rounded-md font-bold m-auto'
                onClick={()=> setCreate(!create) }
            >
                {
                    create
                    ? 'Ver personal'
                    : 'Crear personal'
                }
            </button>
            {
                create
                ? <FormCreatePeople />
                : <ListPeople />
            }
        </section>
    );
}
