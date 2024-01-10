import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    ci: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: false
    },
    role_id: {
        type: String,
        default: 3
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('User', userSchema);
