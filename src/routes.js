import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Pedro Moratelli',
    email: 'pedromoratelli@gmail.com',
    password_hash: '123123321',
  });

  return res.json(user);
});

export default routes;
