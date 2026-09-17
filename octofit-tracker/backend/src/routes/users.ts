import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

router.get('/', async (_request, response) => {
  const users = await User.find();
  response.json(users);
});

router.post('/', async (request, response) => {
  const user = await User.create(request.body);
  response.status(201).json(user);
});

export default router;
