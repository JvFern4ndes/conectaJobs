import { Request, Response } from 'express';

import { User } from '../../models/User';

export async function updateUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const imagePath = req.file?.filename;
    const { first_name, last_name, age, cpf, email, password } = req.body;

    await User.findByIdAndUpdate(userId, { imagePath, first_name, last_name, age, cpf, email, password });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
