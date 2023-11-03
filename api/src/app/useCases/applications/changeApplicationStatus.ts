import { Request, Response } from 'express';

import { Application } from '../../models/Application';

export async function changeApplicationStatus(req: Request, res: Response) {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    if (!['65303fc8c71bacaf0499bd10', '65303ff1c71bacaf0499bd13', '6530400fc71bacaf0499bd15', '65304020c71bacaf0499bd17'].includes(status)) {
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
