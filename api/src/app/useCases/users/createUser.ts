import { Request, Response } from 'express';

import { User } from '../../models/User';

export async function createUser(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { first_name, last_name, age, cpf, email, password, application } = req.body;

    if (!first_name) {
      return res.status(400).json({
        error: 'First name is required',
      });
    }

    if (!last_name) {
      return res.status(400).json({
        error: 'Last name is required',
      });
    }

    if (!age) {
      return res.status(400).json({
        error: 'Age is required',
      });
    }

    if (!cpf) {
      return res.status(400).json({
        error: 'Cpf is required',
      });
    }

    if (!email) {
      return res.status(400).json({
        error: 'Email is required',
      });
    }

    if (!password) {
      return res.status(400).json({
        error: 'Password is required',
      });
    }

    const user = await User.create({
      first_name,
      last_name,
      imagePath,
      age: Number(age),
      cpf: Number(cpf),
      email,
      password,
      application,
    });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
