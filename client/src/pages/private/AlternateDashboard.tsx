
import { useAuth } from "../../context/AuthContext";
import { AdminPage } from "./AdminPage";
import { DirectPage } from "./DirectPage";
import { TeacherPage } from "./TeacherPage";

import UserService from '../../service/ServiceUser';
import { useEffect } from "react";
import { Navigate } from "../../hooks/useNavigate";

export const AlternadeDashboard = () => {
    const auth = useAuth();
    const user = UserService.GetUserStorage();

    useEffect(() => {
        if(!auth.session || user == null) Navigate('/login');
        
    }, []);

    return (
        <>
            { user?.role_id == 1 && <DirectPage /> }
            { user?.role_id == 2 && <AdminPage /> }
            { user?.role_id == 3 && <TeacherPage /> }
        </>
    )

}
