import express from 'express';
// import {
//   registerUser,
//   loginUser,
//   getUserById,
//   updateUser,
//   deleteUser
//   } from '../controllers/users/index.js';
import { loginUser } from '../../controllers/users/loginUser.controller.js';

const router = express.Router();

  // router.post('/register', registerUser);
  router.post('/login', loginUser);
  // router.get('/:userId', getUserById);
  // router.put('/:userId', updateUser);
  // router.delete('/:userId',deleteUser);

  export { router as userRoutes };