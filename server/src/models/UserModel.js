import bcrypt from 'bcryptjs';
import FileSchema from "./schemas/FileSchema.js";
import PostSchema from "./schemas/PostSchema.js";
import AuthSchema from "./schemas/AuthSchema.js";
import FavoriteSchema from "./schemas/FavoriteSchema.js";
import mongoose from 'mongoose';

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
        const step = await FavoriteSchema.findOne({ user_id: data.user_id, post_id:data.post_id });

        if(step) {
            await FavoriteSchema.deleteMany({ user_id: data.user_id, post_id:data.post_id });
            return 'SUCCESS_FAVORITE_DELETE';
        } 

        const fav = await new FavoriteSchema(data);
        await fav.save();
        return 'SUCCESS_FAVORITE_CREATE';

    }

    async GetUser({ query }) {
        const users = await AuthSchema.find(query)
        return users;
    }

    async GetPost({ query }) {
        const posts = await PostSchema.find();
        // const posts = await PostSchema.find().populate('file_id')
        if(!posts) return null;
        return posts;
    }

    async GetPostById({ _id }) {
        const post = await PostSchema.aggregate([
            {$lookup: { from:'users',localField:'creathe_by',foreignField:'_id',as:'file_reference' }},
            {$match:{_id:_id}},
            {$limit: 1}
        ]);
        if(!post) return null;
        return post;
    }

    async GetFavorites({ user_id }) {
        console.log(user_id);
        /*const favorites = await PostSchema.aggregate([
            {$match:{ creathe_by: new mongoose.Types.ObjectId(user_id) }},
            {$lookup: { from:'favorites',localField:'_id',foreignField:'post_id',as:'favorite' }}
        ]);*/
        const favorites = await FavoriteSchema.aggregate([
            { $match:{ user_id: new mongoose.Types.ObjectId(user_id) } },
            {$lookup: { from:'posts',localField:'post_id',foreignField:'_id',as:'post_reference' }}
        ])

        if(!favorites) return null;

        console.log(favorites);

        return favorites;
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
