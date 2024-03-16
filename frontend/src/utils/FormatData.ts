export function formatPhoneNumber(phoneNumber: string): string {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

  if (cleanedPhoneNumber.length === 10) {
    return cleanedPhoneNumber.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
  } else if (cleanedPhoneNumber.length === 11) {
    return cleanedPhoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  } else {
    return phoneNumber;
  }
}

export function formatCPF(cpf: string): string {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}