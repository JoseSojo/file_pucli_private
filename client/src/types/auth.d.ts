import { User } from "./user.d";

export interface LoginInterface {
    email: string,
    password: string
}

export interface ResultFetchLogin {
    response: string,
    token: string,
    data: User
}
