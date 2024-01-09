import jwt from 'jsonwebtoken';

export const SECRET_KEY = 'liceojuangermanroscio_files_public_private';

export const ValidToken = (req, res, next) => {
    try {
        const token = req.header('token');

        if(!token) {
            throw new Error('NOT_TOKEN');
        }

        const decoded = jwt.verify(token, SECRET_KEY); // Decodificando el token
        req.user = decoded;

        next(); // OK
    }
    catch(e) {
        res
            .status(401)
            .json({ response:'HAVE_REFRES_TOKEN', body:null, err:e });
    }
}