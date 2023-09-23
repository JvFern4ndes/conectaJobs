import { Request, Response } from 'express';

import { Status } from '../../models/Status';

export async function updateStatus(req: Request, res: Response) {
  try {
    const { statusId } = req.params;
    const { imagePath, name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Name is required',
      });
    }

    await Status.findByIdAndUpdate(statusId, { imagePath, name });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
