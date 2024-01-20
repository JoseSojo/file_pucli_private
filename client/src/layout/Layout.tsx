import { FC, ReactNode } from "react";
import { useNotification } from "../context/NotiContext";
import { Notification } from "../components/Notification";
import { useAuth } from "../context/AuthContext";
// import { HeaderOffLogin } from "../components/headers/HeaderOffLogin";
import { HeaderOnLogin } from "../components/headers/HeadersOnSession";

interface Props {
    children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
    const noti = useNotification();
    const auth = useAuth();

    return (
        <>
            { noti.notification.status && <Notification />  }
            <div className='w-full min-h-screen bg-gray-200 grid grid-rows-[auto_1fr]'>
                {
                    auth.session === true
                    ? <HeaderOnLogin />
                    : <></>
                }
                <main className='h-[100%]'>
                    { children }
                </main>
            </div>
        </>
    )
}
