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
    file_id: {
        type: Schema.Types.ObjectId,
        ref: 'files',
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export default model('Post', PostSchema);
