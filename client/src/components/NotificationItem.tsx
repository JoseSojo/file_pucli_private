import { FC } from "react";
import { NotiType } from "../types/notifications";

interface Props {
    noti: NotiType
}

export const NotificationItem: FC<Props> = ({ noti }) => {
    const user = noti.propietary_reference[0];

    return (
        <li className='rounded-xl gap-x-4 bg-white text-lg grid grid-cols-[auto_1fr]'>
            <div className={`${noti.view ?'bg-amber-200':'bg-amber-700' } p-5 rounded-l-xl`}></div>
            <div className='grid'>
                <p className='text-md'>{`${user.name} ${user.lastname}`}</p>
                <p className='text-sm text-gray-400 grid'>
                    <span className='text-gray-700'>{noti.asunto}</span>
                    <span>{noti.message}</span>
                </p>
            </div>
        </li>
    )
}
