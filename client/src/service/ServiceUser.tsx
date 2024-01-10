import { URL } from "../constans.d";
import { DataFile } from "../types/files";
import { CreateAdmin, User } from "../types/user.d";

class Service {

    SaveTokenStorage({token}: {token:string}) {
        window.localStorage.setItem('token', token);
    }

    SaveUserStorage({user}: {user:User}) {
        window.localStorage.setItem('user', JSON.stringify(user));
    }

    GetTokenStorage() {
        return window.localStorage.getItem('token');
    }

    GetUserStorage() {
        return JSON.parse(`${window.localStorage.getItem('user')}`) as User|null;
    }

    async CreateTeacher({data}:{data:CreateAdmin}): Promise<string> {
        const RequestOptions = {
            method: 'POST',
            headers: {
                "Content-Type":'application/json',
                "token": `${this.GetTokenStorage()}`
            },
            body: JSON.stringify(data)
        }
        const url = `${URL}user/create/teacher`;
        const result = await fetch(url, RequestOptions);
        if(!result.ok) {
            const json = await result.json();
            return json.response as string;
        }
        const json = await result.json();
        return json.response as string;

        
    }

    async CreateAdmin({data}:{data:CreateAdmin}): Promise<string> {
        const RequestOptions = {
            method: 'POST',
            headers: {
                "Content-Type":'application/json',
                "token": `${this.GetTokenStorage()}`
            },
            body: JSON.stringify(data)
        }
        const url = `${URL}user/create/admin`;
        const result = await fetch(url, RequestOptions);
        if(!result.ok) {
            const json = await result.json();
            return json.response as string;
        }
        const json = await result.json();
        return json.response as string;

        
    }

    async UploadFile({ file }: {file:File}) {
        const formData = new FormData();
        formData.append('file', file);
        const RequestOptions = {
            method: 'POST',
            headers: {
                "token": `${this.GetTokenStorage()}`
            },
            body: formData
        }
        const url = `${URL}user/create/file`;
        const result = await fetch(url, RequestOptions);
        const json = await result.json();
        if(!result.ok) return json.response as string;
        return json;
    }

    async CreatePost({ file, description, type_post }: {file:DataFile,description:string,type_post:string}) {
        const body = { originalname:file.originalname, type:file.type, size:file.size, save_name:file.save_name, description, type_post}
        const RequestOption = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "token":`${this.GetTokenStorage()}`
            },
            body: JSON.stringify(body),
        }
        const url = `${URL}user/create/post`
        const result = await fetch(url, RequestOption);
        const json = await result.json();

        if(!result.ok) {
            return json.response as string;
        }

        return json.response as string;  
    }
}

const user = new Service();

export default user
