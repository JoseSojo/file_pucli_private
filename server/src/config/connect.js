import mongoose from 'mongoose';
const MONGODB_URI = 'mongodb+srv://josesojo1234567890:josesojo123456789@cluster0.df9wohf.mongodb.net/';

export const Connect = () => {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('Connected!'))
        .catch(err => console.error('ERROR', err))
}
