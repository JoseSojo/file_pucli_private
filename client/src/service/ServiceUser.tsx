import { URL } from "../constans.d";
import { DataFile } from "../types/files";
import { CreateNoti } from "../types/notifications.d";
import { ResultPost, ResultFavorite } from "../types/post";
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

    RemoveUserAndTokenStorage() {
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('token');
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

    async SetFavorite({ _id }: {_id:string}) {
        const RequestOption = {
            method: 'PUT',
            headers: { "token":`${this.GetTokenStorage()}` }
        }
        const url = `${URL}user/set/favorite/${_id}`;
        const result = await fetch(url, RequestOption);
        const json = result.json();

        if(!result.ok) {
            const error = await json;
            return error.response;
        }

        const success = await json;
        console.log(success);
        return success.response;
    }

    async GetPost({ description }: {description?:string}) {
        const RequestOption = {
            headers: {
                "token":`${this.GetTokenStorage()}`
            }
        }
        const defaultUrl = `${URL}user/get/post`
        const url = description ? `${defaultUrl}/?description=${description}` : defaultUrl;
        const result = await fetch(url, RequestOption);
        if(!result.ok) {
            return 'DANGER';
        }
        const json = await result.json();
        return json as ResultPost;
    }

    async GetFavorites({ description }: {description?:string}) {
        const RequestOption = {
            headers: {
                "token":`${this.GetTokenStorage()}`
            }
        }
        const GetUser = this.GetUserStorage();
        const userId = GetUser ? GetUser._id : '0000000';
        const defaultUrl = `${URL}user/get/favorites/${userId}`
        const url = description ? `${defaultUrl}/?description=${description}` : defaultUrl;
        const result = await fetch(url, RequestOption);
        if(!result.ok) {
            return 'DANGER';
        }
        const json = await result.json();
        return json as ResultFavorite;
    }

    async GetAllUsers() {
        const RequestOption = {
            headers: {
                "token":`${this.GetTokenStorage()}`
            }
        }
        const url = `${URL}user/get/user`;
        const result = await fetch(url, RequestOption);
        if(!result.ok) return 'error';

        return await result.json();
    }

    async CreateNotification({ data }: {data:CreateNoti}) {
        const RequestOption = {
            method: 'POST',
            headers: { 
                "Content-Type":"application/json",
                "token":`${this.GetTokenStorage()}` 
            },
            body: JSON.stringify(data)
        }
        const url = `${URL}user/create/notification`;
        const result = await fetch(url, RequestOption);
        const json = result.json();
        if(!result.ok) {
            console.log(await json);
            return 'error';
        }
        return await json;
    }

    async GetAllNotification() {
        const RequestOption = {
            method: 'GET',
            headers: { "token":`${this.GetTokenStorage()}` }
        }
        const url = `${URL}user/get/notifications`;
        const result = await fetch(url, RequestOption);
        const json = result.json();
        if(!result.ok) {
            console.log(await json);
            return 'error';
        }
        return await json;
    }

    async GetPublics() {
        const RequestOption = {
            headers: {
                "token":`${this.GetTokenStorage()}`
            }
        }
        const url = `${URL}user/get/post/public`
        const result = await fetch(url, RequestOption);
        if(!result.ok) {
            return 'DANGER';
        }
        const json = await result.json();
        return json as ResultPost;
    }

}

const user = new Service();

export default user
