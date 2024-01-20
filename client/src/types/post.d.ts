import { DataFile } from "./files.d";
import { User } from "./user.d";

export interface Post {
    _id: string,
    description: string,
    type_post: 'PUBLIC' | 'PRIVATE',
    creathe_by: string,
    creathe_date: string,
    file_originalname: string,
    file_size: number,
    file_save_name: string,
    file_type: string    
}

export interface ResultPost {
    response: string,
    body: Post[]
} 

export interface BodyFavorite {
    _id: string,
    user_id: string,
    post_id: string,
    date: Date,
    post_reference: Post[]
}

export interface ResultFavorite {
    response: string,
    body: BodyFavorite[]
}
