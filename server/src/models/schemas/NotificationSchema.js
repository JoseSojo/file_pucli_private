import { Schema, model } from 'mongoose';

const NotificationSchema = Schema({
    asunto: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    propietary: {
        type: Schema.Types.ObjectId,
        required: true
    },
    view: {
        type: Boolean,
        default: false
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: false
    },
    creathe_data: {
        type: Date,
        default: Date.now()
    }
});

export default model('notifications', NotificationSchema);
