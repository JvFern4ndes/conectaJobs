import { Request, Response } from 'express';

import { Application } from '../../models/Application';

export async function changeApplicationStatus(req: Request, res: Response) {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    if (!['6519a4bd7a931b3fc0a49b4d', '6519a4d47a931b3fc0a49b50', '6519a4e97a931b3fc0a49b52', '6519a5007a931b3fc0a49b54'].includes(status)) {
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
