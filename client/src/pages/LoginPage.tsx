import { FormEvent, useState } from "react";
import { CardBasic } from "../components/CardBasic";
import { InputDefine } from "../components/InputGlobal";
import { OpacityText } from "../components/text/OpacityText";
import { useNotification } from "../context/NotiContext";
import { Navigate } from '../hooks/useNavigate';


import ServiceAuth from '../service/ServiceAuth';
import { useAuth } from "../context/AuthContext";

export const LoginPage = () => {
    const noti = useNotification();
    const auth = useAuth();

    const [error, setError] = useState<{ ubication:string|null, error:string|null }>({ ubication:null, error:null });
    const [load, setLoad] = useState<string|null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoad('form.login');

        try {
            const data = { email, password };
            const response = await ServiceAuth.Login({ data });
            if(!response) {
                noti.setNotification({ status:true, type:'DANGER', message:'Error temporal' });
            }

            setEmail('');
            setPassword('');
            setLoad(null);

            auth.setSession(true);
            if(response === '1') Navigate('/dashboard/direct');
            if(response === '2') Navigate('/dashboard/admin');
            if(response === '3') Navigate('/dashboard/teacher');

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
                    <h2 className='font-bold text-3xl text-center mb-5'>Inicia Sesión</h2>
                    <form onSubmit={HandleSubmit} className='grid gap-y-5 mb-7'>
                        <label className='grid grid-cols-1 lg:grid-cols-[.5fr_1fr] place-items-center text-lg font-bold font-mono'>
                            <span>Correo Electrónico</span>
                            <InputDefine
                                load={load}
                                type='text'
                                placeholder="Correo Electrónico"
                                change={setEmail}
                                value={email}
                                error={ error.ubication == 'input.email' ? error.error : null }
                                />
                        </label>
                        <label className='grid grid-cols-1 lg:grid-cols-[.5fr_1fr] place-items-center text-lg font-bold font-mono'>
                            <span>Contraseña</span>
                            <InputDefine
                                load={load}

                                type='password'
                                placeholder="Contraseña"
                                change={setPassword}
                                value={password}
                                error={ error.ubication == 'input.password' ? error.error : null }
                                />
                        </label>
                        <button className='w-full lg:px-10 py-3 bg-amber-500 hover:bg-amber-400 rounded-lg font-bold text-black lg:w-[30%] mx-auto'>
                            {
                                load === 'form.login'
                                ? 'cargando...'
                                : 'entrar'
                            }
                        </button>
                    </form>
                    <aside className='grid place-items-center'>
                        <OpacityText text='¿No tienes cuenta?' />
                        <p className='text-lg font-medium text-blue-700'>Contacta a un administrador</p>
                    </aside>

                </CardBasic>
            </div>
        </>
    );

}
