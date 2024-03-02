import express from 'express';
import { addUser, getUser } from '../controller/UserController.js';
import { getConversation, newConversation } from '../controller/convervation-controller.js';
import { Addmessage, getmessage } from '../controller/message-controller.js';
import { getImage, uploadfile } from '../controller/image-controller.js';
import upload from '../utils/upload.js';
const route = express.Router();


route.post('/add', addUser)
route.get('/users', getUser)

route.post('/conversation/add', newConversation)
route.post('/conversation/get', getConversation)

route.post('/message/add', Addmessage)
route.get('/message/get/:id', getmessage)

route.post('/file/upload',upload.single('file'), uploadfile)
route.get('/file/:filename', getImage);

export default route