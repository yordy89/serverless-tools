// @ts-nocheck
import pdf from 'pdf';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { upload } from '../microservice/document.microservice';

const handler = async (event: APIGatewayProxyEvent) => {
  const { html, name, prefix } = JSON.parse(event.body);
  try {
    if (!html) {
      throw new Error('No html provided');
    }
    const file = await pdf.generate(html);
    console.log('braking');
    const uploadDocResponse = await upload(
      event.headers.Authorization,
      name,
      file,
      prefix
    );

    return {
      statusCode: 200,
      body: JSON.stringify(uploadDocResponse)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message
      })
    };
  }
};

export { handler };
