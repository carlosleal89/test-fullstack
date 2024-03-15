import { NextFunction, Request, Response } from 'express';

export function validateCpf(req: Request, res: Response, next: NextFunction): Response | void {
  const { cpf } = req.body;
  
  if (!cpf) {
    return res.status(400).json({
      message: 'CPF deve ser informado.',
    });
  }
  
  if (cpf.length !== 11) {
    return res.status(400).json({
      message: 'O CPF deve conter 11 digitos.',
    });
  }

  const cpfRegexNotEqualDigits = /^(.)\1*$/;

  if (cpfRegexNotEqualDigits.test(cpf)) {
    return res.status(400).json({
      message: 'CPF inválido.',
    });
  }

  next();
}