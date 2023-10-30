import express from 'express';
import { create, deleteUser, getAll, getOne, updateUser } from '../controller/userController.js';

const route=express.Router();

route.post('/create', create);
route.get('/getall', getAll);
route.get('/getone/:id', getOne);
route.put('/userupdate/:id', updateUser);
route.delete('/deleteuser/:id', deleteUser);

export default route;