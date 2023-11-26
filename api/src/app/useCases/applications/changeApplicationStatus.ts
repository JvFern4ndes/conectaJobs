import { Request, Response } from 'express';

import { Application } from '../../models/Application';

export async function changeApplicationStatus(req: Request, res: Response) {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    if (!['65632539ef4b5d7b80b07667', '6563265eef4b5d7b80b0766a', '6563266cef4b5d7b80b0766c', '6563272bef4b5d7b80b07676'].includes(status)) {
      return res.status(400).json({
        error: 'Status should be one of these: Candidaturas, Teste Online, Entrevista, Aguardando Retorno.'
      });
    }

    await Application.findByIdAndUpdate(applicationId, { status });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
