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
    .message('"Email" inválido.')
    .required(),
  phone: Joi.string()
    .pattern(/^\d{2}\s\d{5}-\d{4}|\d{2}\s\d{4}-\d{4}$/)
    .message('"Telefone" deve estar no formato xx xxxx-xxxx ou xx xxxxx-xxxx').required(),
  status: Joi.string()
    .valid(...Object.values(UserStatus))
    .required(),
  cpf: Joi.string()
    .trim()
    .pattern(/^\d{11}$/)
    .message('CPF deve ter 11 digitos e conter somente números.')
    .custom((value, helpers) => {
      if (/^(\d)\1+$/.test(value)) {
        return helpers.error('any.invalid');
      }
      return value;
    }, 'any.invalid')
    .message('CPF inválido.')
    .required()
})

// the regular expression above validates strings
// in the following formats 'xx xxxx-xxxx' or 'xx xxxxx-xxxx'
// export {}