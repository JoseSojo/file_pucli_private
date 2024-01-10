import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    type_post: {
        type: String,
        require: true
    },
    creathe_by: {
        type: String,
        require: true,
    },
    file_id: {
        type: String,
        require: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Post', PostSchema);
