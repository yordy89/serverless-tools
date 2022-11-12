// Import all functions from getPdf
import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from './generatePdf';

describe('Test generatePdf', () => {
  const event: APIGatewayProxyEvent = {
    httpMethod: 'post',
    body: JSON.stringify({
      html: '',
      name: 'test',
      prefix: 'test'
    }),
    headers: {
      Authorization: 'fakeToken'
    },
    isBase64Encoded: false,
    multiValueHeaders: {},
    multiValueQueryStringParameters: {},
    path: '/pdf',
    pathParameters: {},
    queryStringParameters: {},
    requestContext: {
      accountId: '123456789012',
      apiId: '1234',
      authorizer: {},
      httpMethod: 'post',
      identity: {
        accessKey: '',
        accountId: '',
        apiKey: '',
        apiKeyId: '',
        caller: '',
        clientCert: {
          clientCertPem: '',
          issuerDN: '',
          serialNumber: '',
          subjectDN: '',
          validity: { notAfter: '', notBefore: '' }
        },
        cognitoAuthenticationProvider: '',
        cognitoAuthenticationType: '',
        cognitoIdentityId: '',
        cognitoIdentityPoolId: '',
        principalOrgId: '',
        sourceIp: '',
        user: '',
        userAgent: '',
        userArn: ''
      },
      path: '/pdf',
      protocol: 'HTTP/1.1',
      requestId: 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
      requestTimeEpoch: 1428582896000,
      resourceId: '123456',
      resourcePath: '/pdf',
      stage: 'dev'
    },
    resource: '',
    stageVariables: {}
  };

  it('should return a error message with html no provided', async () => {
    const result = await handler(event);
    console.log(result);
    const expectedResult = {
      statusCode: 500,
      body: JSON.stringify({ message: 'No html provided' })
    };
    expect(result).toEqual(expectedResult);
  });

  it('should return success with statusCode 200', async () => {
    const newEvent = {
      ...event,
      body: JSON.stringify({
        html: '<h1>test</h1>',
        name: 'test',
        prefix: 'test'
      })
    };
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
    const pdf = require('pdf');
    const documentMicroservice = require('../microservice/document.microservice');
    const spyPdfGenerate = jest.spyOn(pdf, 'generate').mockResolvedValue({});
    const spyUploadDocument = jest
      .spyOn(documentMicroservice, 'upload')
      .mockResolvedValue(mockSaveDocument);
    const result = await handler(newEvent);
    expect(spyPdfGenerate).toHaveBeenCalled();
    expect(spyUploadDocument).toHaveBeenCalledWith(
      'fakeToken',
      'test',
      {},
      'test'
    );
    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify(mockSaveDocument)
    });
  });
});
