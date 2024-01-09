import { URL } from "../constans.d";
import { LoginInterface, ResultFetchLogin } from "../types/auth.d";
import ServiceUser from './ServiceUser';

class Service {

    async Login({ data }: { data:LoginInterface }): Promise<boolean|string> {
        const RequestOptions = {
            method: 'POST',
            headers: {
                "Content-Type":'application/json'
            },
            body: JSON.stringify(data)
        }

        const result = await fetch(`${URL}auth/login`, RequestOptions);
        if(!result.ok) {
            const error = await result.json();
            console.log(error);
            return false
        }

        const user = await result.json() as ResultFetchLogin;
        ServiceUser.SaveTokenStorage({ token:user.token });
        ServiceUser.SaveUserStorage({ user:user.data });
        
        return user.data.role_id.toString();
    }

}

const auth = new Service();

export default auth;
