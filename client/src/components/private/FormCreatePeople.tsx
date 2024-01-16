import { FormEvent, useState } from "react"
import { InputDefine } from "../InputGlobal";
import { TitleText } from "../text/TitleText";
import { useNotification } from "../../context/NotiContext";
import ServiceUser from '../../service/ServiceUser';

export const FormCreatePeople = () => {
    const noti = useNotification();

    const [error, setError] = useState<{ ubication:string,error:string }|null>(null)
    const [load, setLoad] = useState(false);
    const [section, setSection] = useState<'TEACHER'|'ADMIN'>('ADMIN');

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [ci, setCi] = useState('');
    const [email, setEmail] = useState('');

    const HandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(load) return;

        if(name == '') return setError({ ubication:'input.name', error:'debes llenar este campo' });
        if(lastname == '') return setError({ ubication:'input.lastname', error:'debes llenar este campo' });
        if(ci == '') return setError({ ubication:'input.ci', error:'debes llenar este campo' });
        if(email == '') return setError({ ubication:'input.email', error:'debes llenar este campo' });

        setLoad(true);

        try {
            
            const data = {name,lastname,ci,email};
            if(section === 'ADMIN') {
                const response = await ServiceUser.CreateAdmin({ data });

                if(response !== 'SUCCESS_CREATE_ADMIN') {
                    noti.setNotification({ status:true, type:'DANGER', message:'verifica los datos' });
                    if(response === 'DANGER_EMAIL_IN_USE') setError({  ubication:'input.email', error:'correo en uso' });
                    if(response === 'DANGER_CI_IN_USE') setError({  ubication:'input.ci', error:'cédula en uso' });
                    return setLoad(false);
                }

                noti.setNotification({ status:true, type:'SUCCESS', message:'administrador creado' });
            } else {
                const response = await ServiceUser.CreateTeacher({ data });

                if(response !== 'SUCCESS_CREATE_TEACHER') {
                    noti.setNotification({ status:true, type:'DANGER', message:'verifica los datos' });
                    if(response === 'DANGER_EMAIL_IN_USE') setError({  ubication:'input.email', error:'correo en uso' });
                    if(response === 'DANGER_CI_IN_USE') setError({  ubication:'input.ci', error:'cédula en uso' });
                    return setLoad(false);
                }

                noti.setNotification({ status:true, type:'SUCCESS', message:'administrador creado' });
            }
            
            setLoad(false);
            setName('');
            setLastname('');
            setCi('');
            setEmail('');
            setError(null);

        } catch (error) {
            noti.setNotification({ status:true, type:'DANGER', message:'error temporal' });
            setLoad(false);
        }

    }

    return (
        <section className='w-[90%] lg:w-[50%] m-auto'>
            <TitleText text='Crear Personal' />
            <form className='grid gap-y-3' onSubmit={HandleSubmit}>
                
                <label>
                    <span className='text-lg font-bold text-gray-800'>Profesor o Administrador</span>
                    <select className='w-full p-3 text-lg outline-none rounded-md shadow' onChange={(e)=> setSection(e.target.value as 'TEACHER'|'ADMIN')}>
                        <option selected value='TEACHER'>Profesor</option>
                        <option selected value='ADMIN'>Administrador</option>
                    </select>
                </label>

                <label>
                    <span className='text-lg font-bold text-gray-800'>Nombre</span>
                    <InputDefine 
                        change={setName}
                        error={ error && error.ubication === 'input.name' ? error.error : null }
                        type="text"
                        value={name}
                        placeholder="Nombre"
                        load={load ? 'load' : null}
                        />
                </label>

                <label>
                    <span className='text-lg font-bold text-gray-800'>Apellido</span>
                    <InputDefine 
                        change={setLastname}
                        error={ error && error.ubication === 'input.lastname' ? error.error : null }
                        type="text"
                        value={lastname}
                        placeholder="Apellido"
                        load={load ? 'load' : null}
                        />
                </label>

                <label>
                    <span className='text-lg font-bold text-gray-800'>Cédula</span>
                    <InputDefine 
                        change={setCi}
                        error={ error && error.ubication === 'input.ci' ? error.error : null }
                        type="text"
                        value={ci}
                        placeholder="Cédula"
                        load={load ? 'load' : null}
                        />
                </label>

                <label>
                    <span className='text-lg font-bold text-gray-800'>Correo Electrónico</span>
                    <InputDefine 
                        change={setEmail}
                        error={ error && error.ubication === 'input.email' ? error.error : null }
                        type="email"
                        value={email}
                        placeholder="Correo Eléctronico"
                        load={load ? 'load' : null}
                        />
                </label>

                <button className='text-white bg-amber-600 hover:bg-amber-500 w-[50%] py-3 rounded-md font-bold m-auto'>
                    {
                        load 
                        ? 'creando...'
                        : 'crear'
                    }
                </button>

            </form>
        </section>
    )
} 
 