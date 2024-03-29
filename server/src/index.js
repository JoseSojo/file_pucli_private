import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import fs from 'fs';

import { Connect } from './config/connect.js'; 

// CONTROLLERS
import ControllerAuth from './controllers/AuthController.js';
import ControllerUser from './controllers/UserController.js';
import ControllerNotification from './controllers/NotificationController.js';

import { ValidToken } from './middlewares/session.js';
import MulterMiddleware from './middlewares/file.js';

const app = express();
Connect();
// SETTINGS
const PORT = process.env.PORT || 30456;

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(morgan('dev'));

// Routes
app.post('/auth/register', ControllerAuth.Register);
app.post('/auth/login', ControllerAuth.Login);

app.post('/user/create/file', ValidToken, MulterMiddleware.single('file'), ControllerUser.CreateFile);
app.post('/user/create/post', ValidToken, ControllerUser.CreatePost);
app.post('/user/create/admin', ValidToken, ControllerUser.CreateAdmin);
app.post('/user/create/teacher', ValidToken, ControllerUser.CreateTeacher);
app.post('/user/create/notification', ValidToken, ControllerNotification.CreateNotification);

app.get('/user/get/user', ValidToken, ControllerUser.GetAllUser);
app.get('/user/get/post', ValidToken, ControllerUser.GetAllPost);
app.get('/user/get/favorites/:id', ValidToken, ControllerUser.GetAllFavorites);
app.get('/user/get/notifications', ValidToken, ControllerNotification.GettingAllNotifications);
app.get('/user/get/post/public', ControllerUser.GetPublic);

app.put('/user/update/password', ValidToken, ControllerUser.UpdatePassword);
app.put('/user/update/data', ValidToken, ControllerUser.UpdateData);
app.put('/user/set/favorite/:id', ValidToken, ControllerUser.CreateFav);

// STATIC
const dir = path.join(process.cwd(), 'src/storage');

app.use('/storage', express.static(dir));

app.listen(PORT, ()=> { 
    console.log(`
        SERVER_RUNNING 
        => PORT ${PORT}
        => PATH ${process.cwd()}
        => SRC ${'src/storage'}

    `)
})
