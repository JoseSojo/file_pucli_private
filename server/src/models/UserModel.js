import bcrypt from 'bcryptjs';
import FileSchema from "./FileSchema.js";
import PostSchema from "./PostSchema.js";
import AuthSchema from "./AuthSchema.js";



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

    async GetUser({ id }) {
        const user = await AuthSchema.findById(id)
        return user;
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
