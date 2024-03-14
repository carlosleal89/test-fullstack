import joi from 'joi';

const UserStatus = {
  Ativo: 'Ativo',
  Inativo: 'Inativo',
  AguardandoAtivacao: 'Aguardando ativação',
  Desativado: 'Desativado',
};

export const createUserValidator = joi.object({
  name: joi.string().regex(/^[a-zA-Z\s]*$/)
    .message('"Nome" não pode conter números ou caracteres especiais').min(4).max(250).required(),
  email: joi.string().email().required(),
  phone: joi.string().pattern(/^\(\d{2}\)\d{4,5}-\d{4}$/)
    .message('"Telefone" deve estar no formato (xx)xxxx-xxxx ou (xx)xxxxx-xxxx').required(),
  status: joi.string().valid(...Object.values(UserStatus)).required(),
})

// the regular expression above validates strings
// in the following formats '(xx) xxxx-xxxx' or '(xx) xxxxx-xxxx'