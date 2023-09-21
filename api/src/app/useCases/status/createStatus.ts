import { Request, Response } from 'express';

import { Status } from '../../models/Status';

export async function createStatus(req: Request, res: Response) {
  try {
    const { imagePath, name } = req.body;

    const status = await Status.create({ imagePath, name });

    res.status(201).json(status);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
