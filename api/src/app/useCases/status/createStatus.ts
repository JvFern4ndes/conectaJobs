import { Request, Response } from 'express';

import { Status } from '../../models/Status';

export async function createStatus(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        error: 'Title is required',
      });
    }

    const status = await Status.create({ imagePath, title });

    res.status(201).json(status);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
