import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ValidSession = () => {
    const auth = useAuth();

    if(!auth.session) return <Navigate to='/login' replace />

    return <Outlet />

}
