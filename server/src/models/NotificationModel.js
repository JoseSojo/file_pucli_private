import NotificationSchema from "./schemas/NotificationSchema.js";
import {Types} from 'mongoose';

class Notification {

    async CreateNotification({ data }) {
        const noti = new NotificationSchema(data);
        const result = await noti.save();
        return result;
    }

    async GetAllNotification({ id }) {
        const result = await NotificationSchema.aggregate([
            {$lookup: { from:'users', localField:'propietary', foreignField:'_id', as:'propietary_reference'}}
        ]);
        const send = result.filter((d) => d.user_id == id);
        return send;
    }

    async SetNotification({ noti_id }) {
        const test = await NotificationSchema.findById(noti_id);

        if(test.view === false) {
            test.view = true;
            const result = await NotificationSchema.findOneAndUpdate(noti_id, test);
            return result;
        }

        test.view = false;
        const result = await NotificationSchema.findOneAndUpdate(noti_id, test);
        return result;
    }

}

const noti = new Notification();

export default noti;
