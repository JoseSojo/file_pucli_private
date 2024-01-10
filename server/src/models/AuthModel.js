import AuthSchema from './schema/AuthSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'liceojuangermanroscio_files_public_private';

class AuthModel {

        async CreateUser({ data }) {

            const validEmail = await AuthSchema.find({ email:data.email });
            if(validEmail.length > 0) return { err: true, error: 'DANGER_EMAIL_IN_USE' }

            const validCI = await AuthSchema.find({ ci:data.ci });
            //console.log(validCI)
            if(validCI.length > 0) return { err: true, error: 'DANGER_CI_IN_USE' }

            data.password = await bcrypt.hash(data.password, 9);
            const newSchema = new AuthSchema(data);
            const result = await newSchema.save();
            console.log(result);

            return result;
        }

        async LoginUser({ data }) {
            const User = await AuthSchema.find({ email:data.email });
            if(!User) return { err: true, error: 'DANGER_EMAIL_NOT_FOUND' };

            const compare = bcrypt.compare(data.password, User[0].password);
            if(!compare) return { err: true, error: 'DANGER_PASSWORD_NOT_FOUND' };

            const token = jwt.sign(
                { id: User[0]._id.toString() },
                SECRET_KEY,
                {
                    expiresIn: '1 days'
                }
            );
        

            return { data:User[0], token };
        }

}

const auth = new AuthModel();

export default auth;
