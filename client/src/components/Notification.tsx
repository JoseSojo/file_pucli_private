import { useEffect } from "react";
import { useNotification } from "../context/NotiContext"

export const Notification = () => {
    const noti = useNotification();
    const type = noti.notification.type;
    const message = noti.notification.message;

    useEffect(() => {
        setTimeout(() => noti.setNotification({ message:'', type:'DANGER', status:false }), 3000);
    }, [])

    return (
        <aside className='bottom-10 absolute right-10 w-auto bg-white rounded-lg shadow-lg text-nowrap z-50'>
            <div className='w-full h-full px-12 py-4 relative'>
                <span 
                    className={`
                        w-5 h-5 absolute rounded-full
                        -top-2 -right-2
                        animate-ping
                        ${ type == 'DANGER' ?'bg-red-500' :'bg-emerald-500' }
                    `}
                ></span>
                <p
                    className={`font-bold ${type == 'DANGER' ?'text-red-500' :'text-emerald-500' } `}
                    >
                    { message }
                </p>
            </div>
        </aside>
    )
}
