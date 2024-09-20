import {Router} from 'express';

import homeController from './controllers/homeController.js'
import postController from './controllers/postCpntroller.js'

const router = Router();

router.use(homeController)
router.use(postController)

export default router;
