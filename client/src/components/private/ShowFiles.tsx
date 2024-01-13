import { useEffect, useState } from "react";
import { Post } from "../../types/post.d";
import { CardFiles } from "../card/CardFiles";
import UserService from '../../service/ServiceUser';

export const ShowFiles = () => {
    const [postList, setPostList] = useState<Post[] | null>(null);

    useEffect(() => {
        const Get = async () => {
            const response = await UserService.GetPost({ description: undefined });
            if(response == 'DANGER') return;
            setPostList(response.body);
        }

        Get();
    },[])

    return (
        <>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-5'>
                {
                    postList 
                    ? <>
                        {
                            postList.map((item) => ( <CardFiles favorite={false} key={item._id} post={item} /> ))
                        }
                    </>
                    : <>
                        <span>No existen los post</span>
                    </>
                }
            </section>
        </>
    );
}
