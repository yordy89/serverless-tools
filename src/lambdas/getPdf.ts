interface IResponse {
  statusCode: number;
  body: string;
}

interface IEvent {
  httpMethod: string;
  path: string;
  pathParameters: {
    id: string;
  };
}

export const handler = async (event: IEvent) => {
  if (event.httpMethod !== 'GET') {
    throw new Error(
      `getMethod only accept GET method, you tried: ${event.httpMethod}`
    );
  }
  // All log statements are written to CloudWatch
  console.info('received:', event);

  // Get the item from the table
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property
  let response: IResponse = {
    statusCode: 200,
    body: ''
  };

  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({ data: 'get Pdf' })
    };
  } catch (ResourceNotFoundException) {
    response = {
      statusCode: 404,
      body: 'Unable to get pdf'
    };
  }

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
