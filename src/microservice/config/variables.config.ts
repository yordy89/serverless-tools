export const VariablesConfig = {
  MICROSERVICES: {
    ACCESS_CONTROL_HOST:
      process.env.MICROSERVICE_ACCESS_CONTROL_HOST || 'http://localhost:3070',
    AUTHORIZATION_HOST:
      process.env.MICROSERVICE_AUTHORIZATION_HOST ||
      'http://auth-api-development.buychain.tech',
    DOCUMENTS_HOST:
      process.env.MICROSERVICE_DOCUMENTS_HOST ||
      'http://documents-api-development.buychain.tech'
  }
};
