import { Request, Response } from 'express';

import { Status } from '../../models/Status';

export async function listStatus(req: Request, res: Response) {
  const status = await Status.find();

  res.json(status);
}
