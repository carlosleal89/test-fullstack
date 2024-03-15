import Joi from 'joi';

const UserStatus = {
  Ativo: 'Ativo',
  Inativo: 'Inativo',
  AguardandoAtivacao: 'Aguardando ativação',
  Desativado: 'Desativado',
};

export const createUserValidator = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z\s]*$/)
    .message('"Nome" não pode conter números ou caracteres especiais')
    .min(4)
    .message('"Nome" deve ter pelo menos 4 caracteres.' )
    .max(250)
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .message('"Email" incorreto')
    .required(),
  phone: Joi.string()
    .pattern(/^\d{2}\s\d{5}-\d{4}|\d{2}\s\d{4}-\d{4}$/)
    .message('"Telefone" deve estar no formato xx xxxx-xxxx ou xx xxxxx-xxxx')
    .required(),
  status: Joi.string()
    .valid(...Object.values(UserStatus))
    .required(),
})

// the regular expression above validates strings
// in the following formats '(xx) xxxx-xxxx' or '(xx) xxxxx-xxxx'