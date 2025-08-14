import {Router} from 'express';
import testeMongo from '../controllers/mongoController.js';

const mongoRoute = Router();

mongoRoute.get('/db',testeMongo);

export default mongoRoute;