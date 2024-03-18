import { createUserValidator } from './schemas';

export const validateUser = ( name: string, email: string, phone: string, status: string ) => {
  const options = {
    abortEarly: false, // show all the error messages, not only the first one
};
  const { error } = createUserValidator.validate({ name, email, phone, status }, options)

  if (error) {
    return { status: 'INVALID_DATA', message: error.message };
  }
}