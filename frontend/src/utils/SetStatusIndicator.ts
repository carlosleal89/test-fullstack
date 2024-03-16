export default function setStatusIndicator (status: string): string {
  let statusColor: string;
  
  switch (status) {
    case 'Ativo':
      statusColor = 'green-500';
      break;
    case 'Inativo':
      statusColor = 'red-500';
      break;
    case 'Aguardando ativação':
      statusColor = 'amber-500';
      break;
    case 'Desativado':
      statusColor = 'gray-300';
      break;
    default:
      statusColor = 'gray-300';
  }
  return statusColor;
}