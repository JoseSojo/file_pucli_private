import AuthModel from '../models/AuthModel.js';

class AuthController {

    async Login(req, res) {
        const {email, password} = req.body;

        const User = {email, password};

        const responseService = await AuthModel.LoginUser({ data:User });

        if(responseService.err) {
            return res 
                .status(400)
                .json({ response:responseService.error })
        }

        return res 
            .status(200)
            .json({ 
                response:'SUCCESS_LOGIN_USER',
                token: responseService.token,
                data: responseService.data
            })

    }

    async Register(req, res) {
        const {name, lastname, ci, email} = req.body;

        if(!name) return res.status(400).json({ response:'DANGER_NAME_UNDEFINED' });
        if(!lastname) return res.status(400).json({ response:'DANGER_LASTNAME_UNDEFINED' });
        if(!ci) return res.status(400).json({ response:'DANGER_CI_UNDEFINED' });
        if(!email) return res.status(400).json({ response:'DANGER_EMAIL_UNDEFINED' });
        if(!ci) return res.status(400).json({ response:'DANGER_CI_UNDEFINED' });

        const newUser = {name, lastname, ci, email, password:ci};
        const responseService = await AuthModel.CreateUser({ data: newUser });

        if(responseService.err) {
            return res 
                .status(400)
                .json({ response: responseService.error })
        }

        return res
            .status(200)
            .json({ response: 'SUCCESS_CREATE_USER' })

    }

}

const auth = new AuthController();

export default auth;

