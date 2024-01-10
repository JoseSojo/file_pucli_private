import mongoose from 'mongoose';

const FileSchema = mongoose.Schema({
    originalname: {
        type: String,
        require: true
    },
    size: {
        type: Number,
        require: true
    },
    save_name: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('File', FileSchema);
