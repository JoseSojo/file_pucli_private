import { FormEvent, useState } from "react";
import { CardBasic } from "../components/CardBasic";
import { InputDefine } from "../components/InputGlobal";
import { Link } from "react-router-dom";
import { useNotification } from "../context/NotiContext";

export const ContactAdmin = () => {
    const noti = useNotification();

    const [error, setError] = useState<{ ubication:string|null, error:string|null }>({ ubication:null, error:null });
    const [load, setLoad] = useState<string|null>(null);
    const [message, setMessage] = useState('');
    const [fullname, setFullname] = useState('');
    const [asunto, setAsunto] = useState('');

    const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoad('form.login');
        if(fullname === '') {
            setLoad(null);
            return setError({ ubication:'input.fullname',error:'Debes completar este campo' })
        }
        if(asunto === '') {
            setLoad(null);
            return setError({ ubication:'input.asunto',error:'Debes completar este campo' })
        }
        if(message === '') {
            setLoad(null);
            return setError({ ubication:'input.message',error:'Debes completar este campo' })
        }


        try {
            
            throw new Error('culoooooooooo')
            setLoad(null);


        } catch (error) {
            setError({ ubication:'global', error:'Error temporal' });
            noti.setNotification({ status:true, type:'DANGER', message:'Error temporal' });
            setLoad(null);
        }

    }

    return (
        <>
            <div className='w-full h-full grid place-items-center'>
                <CardBasic>
                    <h2 className='font-bold text-3xl text-center mb-5'>Contactar Administrador</h2>
                    <form onSubmit={HandleSubmit} className='grid gap-y-5 mb-7'>
                        <label className='grid grid-cols-1 md:grid-cols-[.5fr_1fr] place-items-center text-lg font-bold font-mono'>
                            <span>Nombre y Apellido</span>
                            <InputDefine
                                load={load}
                                type='text'
                                placeholder="Nombre Completo"
                                change={setFullname}
                                value={fullname}
                                error={ error.ubication == 'input.fullname' ? error.error : null }
                                />
                        </label>
                        <label className='grid grid-cols-1 md:grid-cols-[.5fr_1fr] place-items-center text-lg font-bold font-mono'>
                            <span>Asunto</span>
                            <InputDefine
                                load={load}
                                type='text'
                                placeholder="Asunto"
                                change={setAsunto}
                                value={asunto}
                                error={ error.ubication == 'input.asunto' ? error.error : null }
                                />
                        </label>
                        <label className='grid grid-cols-1 md:grid-cols-[.5fr_1fr] place-items-center text-lg font-bold font-mono'>
                            <span>Mensaje</span>
                            <InputDefine
                                load={load}
                                type='text'
                                placeholder="Mensaje"
                                change={setMessage}
                                value={message}
                                error={ error.ubication == 'input.message' ? error.error : null }
                                />
                        </label>
                        <button className='px-10 py-3 bg-amber-500 hover:bg-amber-400 rounded-lg font-bold text-black w-[30%] mx-auto'>
                            {
                                load === 'form.login'
                                ? 'enviando...'
                                : 'enviar'
                            }
                        </button>
                    </form>
                    <aside className='grid place-items-center'>
                        <p className='text-lg font-medium text-blue-700'><Link to='/login'>ir al login</Link></p>
                    </aside>

                </CardBasic>
            </div>
        </>
    );

}
