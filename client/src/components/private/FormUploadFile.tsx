import { FormEvent, useState } from "react"
import { InputDefine } from "../InputGlobal";
import { TitleText } from "../text/TitleText";
import { useNotification } from "../../context/NotiContext";
import ServiceUser from '../../service/ServiceUser';
import { DataFile, ResponseUploadFile } from "../../types/files";

export const FormUploadFile = () => {
    const noti = useNotification();

    const [error, setError] = useState<{ ubication:string|null,error:string|null }>({ ubication:null,error:null })
    const [load, setLoad] = useState(false);

    const [description, setDescription] = useState('');
    const [type, setType] = useState<string>('PUBLIC');
    const [file, setFile] = useState<File|null>(null);
    const [dataFile, setDataFile] = useState<DataFile | null>(null);

    const HandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(load) return;
        setLoad(true);

        try {
            if(dataFile) {
                if(description == '') return setError({ ubication:'input.description', error:'debes llenar este campo' });
                if(type == '') return setError({ ubication:'input.type', error:'debes llenar este campo' });

                const response = await ServiceUser.CreatePost({ file:dataFile, description, type_post:type });
                if(response === 'SUCCESS_CREATE_POST') noti.setNotification({ status:true,type:'SUCCESS',message:'publicación creada' });
                noti.setNotification({ status:true,type:'DANGER',message:'error temporal' });

                setDataFile(null);
                setType('');
                setDescription('');
                setFile(null);

            }
            else {
                if(!file) return setError({ ubication:'input.file', error:'debes seleccionar un archivo' });

                const response = await ServiceUser.UploadFile({file});
                if(!response) {
                    noti.setNotification({ status:true, type:'DANGER',message:'error temporal' });
                }

                const fileResult = response as ResponseUploadFile; 
                noti.setNotification({ status:true, type:'SUCCESS', message:'archivo creado' })
                setDataFile(fileResult.file_data);
            }

            setLoad(false);
            setError({ ubication:null,error:null });

        } catch (error) {
            noti.setNotification({ status:true, type:'DANGER', message:'error temporal' });
            setLoad(false);
        }

    }

    return (
        <section className='w-[90%] lg:w-[80%] m-auto'>
            <TitleText text='Subir Archivo' />
            <form className='grid gap-y-3' onSubmit={HandleSubmit}>
                

                {dataFile === null && <label>
                    <span className='text-lg font-bold text-gray-800'>Archivo</span>
                    <div className='w-full'>
                        <input 
                            type='file'
                            onChange={(e)=> {
                                if(load) return;
                                if(e.target.files) setFile(e.target.files[0])
                            }}
                            className={`border rounded-lg w-full p-2 ${load ? 'cursor-progress' : 'cursor-normal'}`} 
                            />
                        { error.ubication == 'input.file' && <p className='text-red-600 font-bold text-lg'>{error.error}</p> }
                    </div>
                </label>}

                { dataFile && <>
                    <label>
                        <span className='text-lg font-bold text-gray-800'>Descripción</span>
                        <InputDefine 
                            change={setDescription}
                            error={ error.ubication === 'input.description' ? error.error : null }
                            type="text"
                            value={description}
                            placeholder="Descripción"
                            load={load ? 'load' : null}
                            />
                    </label>
                    <label>
                        <span className='text-lg font-bold text-gray-800'>Publicación</span>
                        <select onChange={(e)=> setType(e.target.value)} className='w-full p-3 font-bold text-lg rounded-md outline-none'>
                            <option selected value='PUBLIC'>Publico</option>
                            <option selected value='PRIVATE'>Privado</option>
                        </select>
                        { error.ubication == 'input.type' && <p className='text-red-600 font-bold text-lg'>{error.error}</p> }

                    </label>
                    <TitleText text='Datos del archivo' />
                    <aside className='grid gap-y-2'>
                        <p className='grid grid-cols-2 text-lg text-gray-700 place-items-center'>Nombre original: <b>{dataFile.originalname}</b></p>
                        <p className='grid grid-cols-2 text-lg text-gray-700 place-items-center'>Guardado como: <b>{dataFile.save_name}</b></p>
                        <p className='grid grid-cols-2 text-lg text-gray-700 place-items-center'>Tipo de archivo: <b>{dataFile.type}</b></p>
                        <p className='grid grid-cols-2 text-lg text-gray-700 place-items-center'>Tamaño del archivo: <b>{dataFile.size}</b></p>
                    </aside>

                </>}

                <button className='text-white bg-amber-600 hover:bg-amber-500 w-[50%] py-3 rounded-md font-bold m-auto'>
                    {
                        dataFile 
                        ? load  ? 'creando...' : 'crear'
                        : load  ? 'cargando archivo...' : 'cargar archivo'
                    }
                </button>

            </form>
        </section>
    )
} 
 