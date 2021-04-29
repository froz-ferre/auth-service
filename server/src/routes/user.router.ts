import express from 'express';
import { userController } from '../controllers/user.controller';

export const router = express.Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.check);
router.put('/:id');
router.delete('/:id');
