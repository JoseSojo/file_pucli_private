
import UserModel from '../models/UserModel.js';
import AuthModel from '../models/AuthModel.js';

class UserController {

    async CreateFile(req, res) {
        const ReturnObj = {
            originalname: req.file.originalname,
            type: req.file.mimetype,
            size: req.file.size,
            save_name: req.file.path.split('/').pop()
        }

        return res 
            .status(200)
            .json({
                response:'SUCCESS_CREATE_FILE',
                file_data: ReturnObj
            })
    }

    async CreatePost(req, res) {
        const {originalname, type, size, save_name, description, type_post} = req.body;

        const DataFile = { originalname, type, size, save_name };
        const resultFile = await UserModel.CreateFile({ data:DataFile });

        const DataPost = { description, type_post, creathe_by:req.user.id, file_id:resultFile._id }
        const resultPost = await UserModel.CreatePost({ data: DataPost })

        return res 
            .status(200)
            .json({
                response:'SUCCESS_CREATE_POST'
            })
    }

    async CreateAdmin(req, res) {
        const { email, ci, name, lastname } = req.body;

        const User = await UserModel.GetUser({ id: req.user.id });
        if(User.role_id === 2) return res.status(400).json({ response:'DANGER_NOT_ADMIN_NOT_DIRECT' })

        const DataUser = {email,ci,name,lastname,role_id:2,password:ci};
        const resultRegister = await AuthModel.CreateUser({ data:DataUser });

        if(resultRegister.err) return res.status(400).json({ response:resultRegister.error });

        return res 
            .status(200)
            .json({ response:'SUCCESS_CREATE_ADMIN' });
    }

    async CreateTeacher(req, res) {
        const { email, ci, name, lastname } = req.body;

        const User = await UserModel.GetUser({ id: req.user.id });
        if(User.role_id === 2) return res.status(400).json({ response:'DANGER_NOT_ADMIN_NOT_DIRECT' })

        const DataUser = { email,ci,name,lastname,role_id:3,password:ci };
        const resultRegister = await AuthModel.CreateUser({ data:DataUser });

        if(resultRegister.err) return res.status(400).json({ response:resultRegister.error });

        return res 
            .status(200)
            .json({ response:'SUCCESS_CREATE_ADMIN' });
    }

    async UpdatePassword(req, res) {
        const { new_password, password } = req.body;

        const update = {new_password, password};

        const resultUpdate = await UserModel.UpdatePassword({ data:update, id:req.user.id });

        if(resultUpdate.err) return res.status(400).json({ response:resultUpdate.error });

        return res 
            .status(200)
            .json({ response:'SUCCESS_UPDATE_PASSWORD' });
    }

    async UpdateData(req, res) {
        const { name, lastname, email, ci } = req.body;

        const update = {nname, lastname, email, ci};

        const resultUpdate = await UserModel.UpdateData({ data:update, id:req.user.id });

        if(resultUpdate.err) return res.status(400).json({ response:resultUpdate.error });

        return res 
            .status(200)
            .json({ response:'SUCCESS_UPDATE_PASSWORD' });
    }

}

const user = new UserController();

export default user;
