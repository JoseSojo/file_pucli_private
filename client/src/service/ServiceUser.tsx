import { User } from "../types/user.d";

class Service {

    SaveTokenStorage({token}: {token:string}) {
        window.localStorage.setItem('token', token);
    }

    SaveUserStorage({user}: {user:User}) {
        window.localStorage.setItem('user', JSON.stringify(user));
    }

    GetUserStorage() {
        return window.localStorage.getItem('user') as User|null;
    }

}

const user = new Service();

export default user
