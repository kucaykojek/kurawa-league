export const HTTP_MESSAGES: { [key: number]: string } = {
  200: 'OK',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error'
};

export const ERROR_MESSAGES: { [key: string]: string } = {
  username_already_exist: 'Username already exist'
};
