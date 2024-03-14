import { createUserValidator } from './schemas';
import { ServiceResponseError } from '../interfaces/ServiceResponse';

export const validateNewUser = ( name: any, email: any, phone: any, status: any ) => {
  const options = {
    abortEarly: false, // show all the error messages, not only the first one
};
  const { error } = createUserValidator.validate({ name, email, phone, status }, options)

  if (error) {
    return { status: 'INVALID_DATA', message: error.message };
  }
}