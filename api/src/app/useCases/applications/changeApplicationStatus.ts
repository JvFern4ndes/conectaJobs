import { Request, Response } from 'express';

import { Application } from '../../models/Application';

export async function changeApplicationStatus(req: Request, res: Response) {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    if (!['650b890adc317d1d6fd2a55c', '650b89fadc317d1d6fd2a560', '650b8a05dc317d1d6fd2a562', '650b8a13dc317d1d6fd2a564'].includes(status)) {
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
