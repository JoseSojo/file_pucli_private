import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

export type StructureNotification = { status:boolean, type: 'SUCCESS'|'DANGER', message:string }

export interface NotificationContextInterface {
    notification: StructureNotification,
    setNotification: Dispatch<SetStateAction<StructureNotification>>
}

const DefaultNoti: StructureNotification = { status:false, type:'SUCCESS',message:'' };

const DefaultContext: NotificationContextInterface = {
    notification: DefaultNoti,
    setNotification: () => {}
}

export const NotificationContext = createContext(DefaultContext);

export const NotificationProvider = ({children}: {children: ReactNode}) => {
    
    const [noti, setNoti] = useState<StructureNotification>(DefaultNoti);

    return (
        <NotificationContext.Provider value={{
            notification: noti,
            setNotification: setNoti
        }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext);