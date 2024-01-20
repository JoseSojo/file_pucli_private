import {Schema, model} from 'mongoose';

const PostSchema = Schema({
    description: {
        type: String,
        require: true
    },
    type_post: {
        type: String,
        require: true
    },
    creathe_by: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    file_originalname: {
        type: String,
        require: true
    },
    file_size: {
        type: Number,
        require: true
    },
    file_save_name: {
        type: String,
        require: true,
    },
    file_type: {
        type: String,
        require: true
    }
});

export default model('Post', PostSchema);
