import axios from 'axios';
import FormData from 'form-data';
import { IAttachment, IUser } from '../types';

export const upload = async (
  authorization: string,
  name: string,
  pdf: Buffer,
  prefix: string,
  user?: IUser
): Promise<IAttachment> => {
  let URL = `${process.env.MICROSERVICE_DOCUMENTS_HOST}/v1/documents` || '';
  const formData = new FormData();
  formData.append('name', name);
  formData.append('prefix', prefix);
  formData.append('document', pdf, `${prefix}-${name}.pdf`);

  if (user) {
    formData.append('user', JSON.stringify(user));
    URL =
      `${process.env.MICROSERVICE_DOCUMENTS_HOST}/v1/documents/system` || '';
  }

  const { data } = await axios.post(URL, formData, {
    headers: {
      ...formData.getHeaders(),
      authorization
    }
  });
  return data;
};
