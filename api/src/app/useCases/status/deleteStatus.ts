import { Request, Response } from 'express';

import { Status } from '../../models/Status';

export async function deleteStatus(req: Request, res: Response) {
  try {
    const { statusId } = req.params;

    await Status.findByIdAndDelete(statusId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
