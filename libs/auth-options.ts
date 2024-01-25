import { AuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

import { login } from '@/services/auth';

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Kata Sandi', type: 'password' }
      },
      async authorize(credentials): Promise<any> {
        if (typeof credentials !== 'undefined') {
          try {
            const res = await login({
              username: credentials.username,
              password: credentials.password
            });

            return { ...res.data.player, token: res.data.token };
          } catch (error) {
            return null;
          }
        } else {
          return null;
        }
      }
    })
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async session({ session, token }) {
      const sanitizedToken = Object.keys(token).reduce((p, c) => {
        // strip unnecessary properties
        if (c !== 'iat' && c !== 'exp' && c !== 'jti' && c !== 'apiToken') {
          return { ...p, [c]: token[c] };
        } else {
          return p;
        }
      }, {});
      return { ...session, user: sanitizedToken, apiToken: token.apiToken };
    },
    async jwt({ token, user }) {
      if (typeof user !== 'undefined') {
        // user has just signed in so the user object is populated
        return user as unknown as JWT;
      }
      return token;
    }
  }
};

export default authOptions;
