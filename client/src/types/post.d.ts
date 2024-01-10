import { DataFile } from "./files.d";
import { User } from "./user.d";

export interface Post {
    description: string,
    type_post: 'PUBLIC' | 'PRIVATE',
    creathe_by: string,
    file_id: string,
    creathe_date: string,
    file_reference: DataFile,
    user_reference: User
}
