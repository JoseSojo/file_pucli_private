import { FC } from "react";
import { NotiType } from "../types/notifications.d";
import { OpacityText } from "./text/OpacityText";
import { NotificationItem } from "./NotificationItem";

interface Props {
    set: boolean,
    notis: NotiType[] | null
}

export const NotificationContainer: FC<Props> = ({ set, notis }) => {

    return (
        <section  
            className={`scale-y-${set?'100':'0'} duration-200 overflow-y-auto min-h-[200px] max-h-[400px] w-[400px] absolute right-0 z-50 rounded-md bg-white shadow-lg text-black mt-3`}>
            {
                notis && notis.length > 0
                ? <ul className='grid grid-cols-1 gap-y-2 bg-gray-100 p-2 h-full'>
                    {
                        notis.map((noti) => <NotificationItem key={noti._id} noti={noti} />)
                    }
                </ul>
                : <OpacityText text='No tienes notificaciones' />
            }
        </section>
    )
}
