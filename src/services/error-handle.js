import { toast } from 'react-toastify';
import request from 'axios';
import { HTTP_CODE } from 'utils/const';


export const errorHandle = (error) => {

  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.info(response.data.error);
        break;
      default:
        toast.info('Что-пошло не так, попробуйте еще раз.')
    }
  }
};
