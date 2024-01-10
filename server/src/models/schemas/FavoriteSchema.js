import mongoose from 'mongoose';

const favoriteSchema = mongoose.Schema({
    user_id: {
        type: String,
        require: true
    },
    post_id: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('favorites', favoriteSchema);

