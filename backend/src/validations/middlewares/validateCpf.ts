import { NextFunction, Request, Response } from 'express';

export function validateCpf(req: Request, res: Response, next: NextFunction): Response | void {
  let { cpf } = req.body;
  
  if (!cpf) {
    return res.status(400).json({
      message: 'Todos os campos devem ser preenchidos.',
    });
  }

  cpf = cpf.replace(/[^\d]/g, ''); // Remove non numerical chars

  const cpfRegex = /^(\d)\1+$/;


  if (cpf.length !== 11) {
    return res.status(400).json({
      message: 'Formato inválido do CPF.',
    });
  }

  if (cpfRegex.test(cpf)) {
    return res.status(400).json({
      message: 'Formato inválido do CPF.',
    });
  }

  next();
}