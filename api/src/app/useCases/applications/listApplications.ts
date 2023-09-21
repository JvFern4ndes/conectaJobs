import { Request, Response } from 'express';

import { Application } from '../../models/Application';

export async function listApplications(req: Request, res: Response) {
  try {
    const applications = await Application.find();

    res.json(applications);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
