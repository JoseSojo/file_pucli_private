import NotificationModel from '../models/NotificationModel.js';

class NotificationController {

    async CreateNotification(req, res) {
        const {asunto, message,user_id} = req.body;

        if(!asunto) return res.status(402).json({response:'DANGER_ASUNTO_NOT_FOUND'});
        if(!message) return res.status(402).json({response:'DANGER_MESSAGE_NOT_FOUND'});



        const newNoti = {asunto, message, propietary:req.user.id, user_id};
        const response = await NotificationModel.CreateNotification({ data: newNoti });
        return res 
            .status(200)
            .json({ response:'SUCCESS_CREATE_NOTIFICATION', body:response });
    }

    async GettingAllNotifications(req, res) {
        // const { view } = req.query;

        const response = await NotificationModel.GetAllNotification({ id:req.user.id });
        return res 
            .status(200)
            .json({response:'SUCCESS_GET_ALL_NOTIFICATIONS', body: response});

    }

    async SetNotification(req, res) {
        const {id} = req.params;

        const response = await NotificationModel.SetNotification({ noti_id:id });
        return res 
            .status(200)
            .json({ response:'SUCCESS_SET_NOTIFICATION', body:response });

    }

}

const noti = new NotificationController();

export default noti;
