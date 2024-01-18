import { useEffect, useState } from "react"
import { useNotification } from "../../context/NotiContext";
import { Notification } from "../../components/Notification";
import ServiceUser from '../../service/ServiceUser';

// icons
import { LuMegaphone, LuHome, LuArrowDownRightFromCircle } from 'react-icons/lu'
import { InicioTeacher } from "../../components/private/InicioTeacher";
import { NotiType, ResultGetNotifications } from "../../types/notifications.d";
import { NotificationContainer } from "../../components/NotificationContainer";

type PagesPayload = 'INICIO'

export const TeacherPage = () => {
    const [payload, setPayload] = useState<PagesPayload>('INICIO');
    const [notiSecction, setNotiSecction] = useState(false);
    const [notificationList, setNotificationList] = useState<NotiType[] | null>(null);
    const [countNotis, setCountNotis] = useState(0);
    const noti = useNotification();
    const user = ServiceUser.GetUserStorage();
    const clsLi = 'font-bold text-xl text-white font-mono list-none p-6 hover:bg-amber-300 duration-200 relative';

    useEffect(() => {
        const GetNotifications = async () => {
            const response = await ServiceUser.GetAllNotification() as ResultGetNotifications;
            setNotificationList(response.body);
            setCountNotis(response.body.length);          

        }
        GetNotifications();
    }, []);

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
                    Profesor: {user?.ci}
                </h1>

                <ul className='flex'>
                    <li
                        onClick={()=>setNotiSecction(!notiSecction)}
                        className={clsLi}
                    >
                        <LuMegaphone />
                        {
                            countNotis > 0 && <span className='absolute -top-[0.5px] -right-[0.5px] text-sm font-bold px-2 py-1 rounded-lg text-white bg-amber-800'>{countNotis}</span>
                        }
                        { notiSecction && <NotificationContainer set={notiSecction} notis={notificationList} />}
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
                payload == "INICIO" ? <InicioTeacher />
                : <span>vas a salir</span>
            }

        </>
    )
}
