import { User } from "./user.d"

export interface NotiType {
    _id: string,
    asunto: string,
    message: string,
    user_id: string,
    creathe_date: string,
    view: boolean,
    propietary: string,
    propietary_reference: [User]
}

export interface ResultGetNotifications {
    response: string,
    body: NotiType[]
}

export interface CreateNoti {
    asunto: string,
    message: string,
    user_id: string
}
