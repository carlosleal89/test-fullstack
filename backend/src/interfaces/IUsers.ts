export enum UserStatus {
  Ativo = 'Ativo',
  Inativo = 'Inativo',
  AguardandoAtivacao = 'Aguardando ativação',
  Desativado = 'Desativado',
}

export interface IUsers {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: UserStatus;
}