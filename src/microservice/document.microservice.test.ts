import axios from 'axios';
import * as DocumentMicroservice from './document.microservice';
import FormData from 'form-data';
import { IUser } from '../types';
jest.mock('axios');
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('DocumentMicroservice', () => {
  const name = 'test';
  const pdf = Buffer.from('test');
  const prefix = 'test';
  const token = 'Bearer fakeToken';
  const mockSaveDocument = {
    name: 'test',
    sizeKb: 6,
    key: '5c595917eebdc87c5ebd66c1/test_cadec6cd-a81d-474b-8390-0957083056de.pdf',
    user: '5c5ad0ca633de27c588a5bb1cvbg4',
    company: '5c595917eebdc87c5ebd66c1er45',
    checksum: '68bcf5949d3a989543d3062479c3ed0a',
    updatedAt: '2022-11-11T23:41:30.777Z',
    createdAt: '2022-11-11T23:41:30.777Z',
    id: '636eddaa73dca006cac67891'
  };
  beforeEach(() => {
    process.env.MICROSERVICE_DOCUMENTS_HOST = 'http://localhost:3000';
    const formData = new FormData();
    formData.append('name', name);
    formData.append('prefix', prefix);
    formData.append('document', pdf, `${prefix}-${name}.pdf`);
    mockedAxios.post = jest.fn().mockResolvedValue({ data: mockSaveDocument });
  });
  it('should return success when call documents', async () => {
    const result = await DocumentMicroservice.upload(token, name, pdf, prefix);

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(mockedAxios.post).toHaveBeenCalledWith(
      'http://localhost:3000/v1/documents',
      expect.any(FormData),
      {
        headers: expect.any(Object)
      }
    );
    expect(result).toEqual(mockSaveDocument);
  });
  it('should return success when call documents/system', async () => {
    const user: IUser = {
      companyId: '5c595917',
      user: {
        id: '5c5ad0ca633de27c588a5bb1cvbg4'
      }
    };
    const result = await DocumentMicroservice.upload(
      token,
      name,
      pdf,
      prefix,
      user
    );

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(mockedAxios.post).toHaveBeenCalledWith(
      'http://localhost:3000/v1/documents/system',
      expect.any(FormData),
      {
        headers: expect.any(Object)
      }
    );
    expect(result).toEqual(mockSaveDocument);
  });
});
