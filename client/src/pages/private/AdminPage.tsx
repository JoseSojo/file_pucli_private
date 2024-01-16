import { useState } from "react"
import { InicioDirect } from "../../components/private/InicioDirect";
import { FilesDirect } from "../../components/private/FilesDirect";
import { PersonalDirect } from "../../components/private/PersonalDirect";
import { useNotification } from "../../context/NotiContext";
import { Notification } from "../../components/Notification";
import ServiceUser from '../../service/ServiceUser';

// icons
import { LuMegaphone, LuHome, LuArrowDownRightFromCircle } from 'react-icons/lu'

type PagesPayload = 'INICIO' | 'FILES' | 'PERSONAL'

export const AdminPage = () => {
    const [payload, setPayload] = useState<PagesPayload>('INICIO');
    const noti = useNotification();
    const user = ServiceUser.GetUserStorage();
    const clsLi = 'font-bold text-xl text-white font-mono list-none p-6 hover:bg-amber-300 duration-200';

    return (
        <>
            { noti.notification.status && <Notification /> }
            <header className='w-full px-10 bg-amber-500 flex justify-between items-center'>
                <h1 
                    style={{
                        textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
                    }}
                    className='text-2xl text-white'
                >
                    Administador: {user?.ci}
                </h1>

                <ul className='flex'>
                    <li
                        onClick={()=>{}}
                        className={clsLi}
                    >
                        <LuMegaphone />
                    </li>
                    <li 
                        onClick={()=> setPayload('INICIO')} 
                        className={clsLi}
                    >
                        <LuHome />
                    </li>
                    <li onClick={()=> {
                        ServiceUser.RemoveUserAndTokenStorage();
                        window.location.reload();
                    }} className={clsLi}
                    >
                        <LuArrowDownRightFromCircle />
                    </li>

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
