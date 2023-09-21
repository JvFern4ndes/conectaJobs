import { Request, Response } from 'express';

import { Status } from '../../models/Status';

export async function listStatus(req: Request, res: Response) {
  try {
    const status = await Status.find();

    res.json(status);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
