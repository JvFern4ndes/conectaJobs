import { Request, Response } from 'express';

import { Application } from '../../models/Application';

export async function listApplicationsByStatus(req: Request, res: Response) {
  try {
    const { statusId } = req.params;

    const applications = await Application.find().where('status').equals(statusId);

    res.json(applications);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
