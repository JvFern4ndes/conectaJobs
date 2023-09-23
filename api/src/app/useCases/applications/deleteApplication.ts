import { Request, Response } from 'express';

import { Application } from '../../models/Application';

export async function deleteApplication(req: Request, res: Response) {
  try {
    const { applicationId } = req.params;

    await Application.findByIdAndDelete(applicationId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
