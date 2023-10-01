import { Request, Response } from 'express';

import { Status } from '../../models/Status';

export async function updateStatus(req: Request, res: Response) {
  try {
    const { statusId } = req.params;
    const { imagePath, title } = req.body;

    if (!title) {
      return res.status(400).json({
        error: 'Title is required',
      });
    }

    await Status.findByIdAndUpdate(statusId, { imagePath, title });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
