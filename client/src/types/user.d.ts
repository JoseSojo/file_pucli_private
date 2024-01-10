
export interface User {
    _id: string,
    ci: string,
    created_date: string,
    email: string,
    name: string,
    lastname: string,
    role: 'DIRECT'|'TEACHER'|'ADMIN',
}

export interface CreateAdmin {
    name: string,
    lastname: string,
    ci: string,
    email: string
}
