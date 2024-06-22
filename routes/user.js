import express from 'express';
import {
  createUser_post,
  getUsers_get,
  getUserById_get,
  updateUser_put,
  deleteUser_delete,
} from '../controllers/user.js';

const router = express.Router();

// Routes for users
router.post('/users', createUser_post);
router.get('/users', getUsers_get);
router.get('/users/:id', getUserById_get);
router.put('/users/:id', updateUser_put);
router.delete('/users/:id', deleteUser_delete);

export default router;