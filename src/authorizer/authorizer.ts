import {
  APIGatewayAuthorizerResult,
  APIGatewayTokenAuthorizerEvent
} from 'aws-lambda';

import { authorize } from '../microservice/authorization.microservice';

export const handler = async (
  event: APIGatewayTokenAuthorizerEvent
): Promise<APIGatewayAuthorizerResult> => {
  try {
    const authResponse = await authorize(event.authorizationToken);
    return {
      principalId: authResponse.user.id,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Allow',
            Resource: '*'
          }
        ]
      }
    };
  } catch (error) {
    console.info('User was not authorized', error);

    return {
      principalId: 'user',
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Deny',
            Resource: '*'
          }
        ]
      }
    };
  }
};
