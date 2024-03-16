import { createUserValidator } from './schemas';

export const validateUser = (
  name: any, email: any, phone: any, status: any, cpf: any ) => {    
  const options = {
    abortEarly: false, // show all the error messages, not only the first one
};
  const { error } = createUserValidator.validate({ name, email, phone, status, cpf }, options)

  if (error) {
    return error;
  }
}