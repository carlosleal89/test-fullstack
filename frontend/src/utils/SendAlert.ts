import Swal, { SweetAlertIcon} from 'sweetalert2';

export const sendAlert = (title: string, text: string, icon: SweetAlertIcon) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: 'OK',
  });
}