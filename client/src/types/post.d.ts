import { DataFile } from "./files.d";
import { User } from "./user.d";

export interface Post {
    _id: string,
    description: string,
    type_post: 'PUBLIC' | 'PRIVATE',
    creathe_by: string,
    file_id: string,
    creathe_date: string,
    file_reference: [DataFile]
}

export interface ResultPost {
    response: string,
    body: Post[]
} 
