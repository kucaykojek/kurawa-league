import jwt from 'jsonwebtoken';

export const decodeToken = (token = '') => {
  try {
    return token
      ? jwt.verify(
          token.replace(/^Bearer\s/, ''),
          process.env.NEXTAUTH_SECRET as string
        )
      : null;
  } catch (error) {
    return null;
  }
};

export const signToken = (data: { id: string }) => {
  return jwt.sign(data, process.env.NEXTAUTH_SECRET as string);
};
