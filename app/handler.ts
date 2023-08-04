import { APIGatewayProxyEventV2 } from 'aws-lambda';

export const signup = async (event: APIGatewayProxyEventV2) => {
  console.log(event);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: 'Signup handler',
      data: {},
    }),
  };
};
