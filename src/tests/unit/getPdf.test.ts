// Import all functions from getPdf
import { handler } from '../../lambdas/getPdf';

describe('Test getPdf', () => {
  // This test invokes getPdfHandler() and compare the result
  it('should return a get pdf message', async () => {
    const event = {
      httpMethod: 'GET',
      pathParameters: {
        id: 'id1'
      }
    };

    // Invoke getPdfHandler()
    const result = await handler(event);

    const expectedResult = {
      statusCode: 200,
      body: JSON.stringify({ data: 'get Pdf' })
    };

    // Compare the result with the expected result
    expect(result).toEqual(expectedResult);
  });
});
