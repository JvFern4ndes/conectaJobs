import { Request, Response } from 'express';
import { io } from '../../..';

import { Application } from '../../models/Application';
import { Status } from '../../models/Status';

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

    const appStatus = await Status.findById(application.status);

    Object.assign(application, { status: appStatus });

    io.emit('applications@new', application);
    res.status(201).json(application);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
