import { Request, Response } from 'express';

import { Application } from '../../models/Application';

export async function createApplication(req: Request, res: Response) {
  try {
    const { title, company, status } = req.body;

    if (!title) {
      return res.status(400).json({
        error: 'Title is required',
      });
    }

    if (!company) {
      return res.status(400).json({
        error: 'Company is required',
      });
    }

    const application = await Application.create({ title, company, status });

    res.status(201).json(application);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
