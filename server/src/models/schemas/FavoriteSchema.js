import {Schema, model} from 'mongoose';

const favoriteSchema = Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        require: true
    },
    post_id: {
        type: Schema.Types.ObjectId,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default model('favorites', favoriteSchema);

