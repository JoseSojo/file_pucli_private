import { FC, FormEvent, useState } from "react";
import { User } from "../../types/user";
import { TitleText } from "../text/TitleText";
import { OpacityText } from "../text/OpacityText";
import { InputDefine } from "../InputGlobal";
import { useNotification } from "../../context/NotiContext";
import ServiceUser from '../../service/ServiceUser';

interface Props {
    user: User
}

export const CardUser: FC<Props> = ({ user }) => {
    const noti = useNotification();

    const [modal, setModal] = useState(false);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState<{ubication:string,error:string} | null>(null);
    const [asunto, setAsunto] = useState('');
    const [message, setMessage] = useState('');

    const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoad(true);
        setError(null);

        const SendNotification = async () => {

            if(asunto === '') return setError({ubication:'input.asunto',error:'Debes completar este campo'});
            if(message === '') return setError({ubication:'input.message',error:'Debes completar este campo'});
            const data = {asunto, message, user_id:user._id};
            
            const response = await ServiceUser.CreateNotification({ data });
            
            if(response === false) {
                noti.setNotification({ status:true, type:'DANGER', message:`error al notificado.` })
            }

            setAsunto('');
            setMessage('');
            setModal(false);
            noti.setNotification({ status:true, type:'SUCCESS', message:`${user.name} ${user.lastname} notificado.` })
            setLoad(false);
            setError(null);

        }

        SendNotification();
        setLoad(false);
    }

    return(
        <>
            {
                modal &&
                <div className='top-0 left-0 w-full min-h-full p-10 rounded-xl absolute bg-black bg-opacity-60 grid place-items-center'>
                    <div className='w-full lg:w-[70%] bg-white rounded-md p-5 relative'>
                        <button
                            onClick={()=>setModal(false)} 
                            className='-top-10 -right-10 absolute text-3xl font-bold text-white hover:text-red-400'
                        >
                            X
                        </button>
                        <TitleText text={`Notificar a ${user.ci}`} />
                        <form onSubmit={HandleSubmit} className='grid gap-y-4'>
                            <label>
                                Asunto
                                <InputDefine
                                    change={setAsunto}
                                    error={ error && error.ubication == 'input.asunto' ? error.error : null }
                                    placeholder="Ingrese el asunto"
                                    type="text"
                                    value={asunto}
                                    load={load}
                                    />
                            </label>
                            <label>
                                Mensaje
                                <InputDefine
                                    change={setMessage}
                                    error={ error && error.ubication == 'input.message' ? error.error : null }
                                    placeholder="Ingrese el mensaje"
                                    type="text"
                                    value={message}
                                    load={load}
                                    />
                            </label>
                            <button 
                                type='submit'
                                className='bg-amber-600 hover:bg-amber-700 text-white font-bold font-mono text-md py-2 rounded-md '
                            >
                                {
                                    load ? 'Notificando...' : 'Notificar'
                                }
                            </button>
                        </form>
                    </div>
                </div>
            }
            <aside className='bg-gray-200 rounded-md p-6'>
                <TitleText text={`${user.name} ${user.lastname}`} />
                <OpacityText text={`${user.ci} - ${user.email}`} />
                <p className='text-gray-700 font-mono text-sm'>creado: {user.created_date}</p>
                <p className='font-bold font-mono text-lg'>{user.role_id == 1 ? 'Director' : user.role_id == 2 ? 'Administrador' : 'Profesor'}</p>
                <button 
                    onClick={()=>setModal(true)}
                    className='bg-amber-600 hover:bg-amber-500 text-white duration-200 font-bold text-sm rounded-md py-2 px-8'
                >
                    Notificar
                </button>
            </aside>
        </>
    )
}
