import { Request, Response } from 'express';

import { User } from '../../models/User';

export async function deleteUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;

    await User.findByIdAndDelete(userId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
