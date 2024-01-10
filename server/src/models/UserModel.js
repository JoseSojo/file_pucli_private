import bcrypt from 'bcryptjs';
import FileSchema from "./schema/FileSchema.js";
import PostSchema from "./schema/PostSchema.js";
import AuthSchema from "./schema/AuthSchema.js";
import favoriteSchema from "./schema/FavoriteSchema.js";

class UserModel {
    async CreateFile({ data }) {
        const file = await new FileSchema(data);
        const fileResult = await file.save();

        return fileResult;
    }

    async CreatePost({ data }) {
        const post = await new PostSchema(data);
        const postResult = await post.save();

        return postResult;
    }

    async CreateFavorite({ data }) {

        const step = await favoriteSchema.findById({ user_id: data.user_id, post_id:data.post_id });
        console.log(step);

        if(step) {
            await favoriteSchema.findAndDelete({ user_id: data.user_id, post_id:data.post_id });
            return 'SUCCESS_FAVORITE_DELETE';
        } 

        const fav = await new favoriteSchema(data);
        await fav.save();
        return 'SUCCESS_FAVORITE_CREATE';

    }

    async GetUser({ query }) {
        const users = await AuthSchema.find(query)
        return users;
    }

    async UpdatePassword({ data, id }) {
        const User = await AuthSchema.findById(id);
        const compare = await bcrypt.compare(data.password, User.password);

        if(!compare) return { err: true, error:'DANGER_PASSWORD_NO_FOUND' }
        const update = { password: bcrypt.hash(data.new_password, 11) }
        
        await AuthSchema.findByIdAndUpdate(id, { $set:{password: update.password} });
        return true;
    }

    async UpdateData({ data, id }) {        
        await AuthSchema.findByIdAndUpdate(id, { $set:data });
        return true;
    }
}

const user = new UserModel();

export default user;
