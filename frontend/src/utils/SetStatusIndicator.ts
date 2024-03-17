export default function setStatusIndicator (status: string): string {
  let statusColor: string;
  
  switch (status) {
    case 'Ativo':
      statusColor = 'green';
      break;
    case 'Inativo':
      statusColor = 'red';
      break;
    case 'Aguardando ativação':
      statusColor = 'orange';
      break;
    case 'Desativado':
      statusColor = 'gray';
      break;
    default:
      statusColor = 'gray';
  }
  return statusColor;
}