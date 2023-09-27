import { Request, Response } from 'express';

import { Application } from '../../models/Application';

export async function listApplications(req: Request, res: Response) {
  try {
    const applications = await Application.find()
      .sort({ createdAt: 1 })
      .populate('status');

    res.json(applications);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
