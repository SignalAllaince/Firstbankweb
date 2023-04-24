import axios, { AxiosResponse } from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const data = {
          email: credentials?.email,
          password: credentials?.password,
        };

        const response: AxiosResponse<
          CredentialsServerResponseModel<IAuthUserSigninResponse>
        > = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND}/auth/signin`,
          data
        );

        if (response.data) {
          return {
            id: response.data.data.id,
            email: response.data.data.email,
            name: `${response.data.data.firstName} ${response.data.data.lastName}`,
            accessToken: response.data.data.accessToken,
            accessTokenExpiry: response.data.data.accessTokenExpiry,
          };
        }

        throw new Error("user authentication failed");
      },
    }),
  ],
  callbacks: {
    // @ts-expect-error
    async jwt({ token, user }) {
      if (user) {
        // token.accessToken = user.accessToken;
        // token.accessTokenExpiry = user.accessTokenExpiry;
        // token.refreshToken = user.refreshToken;
        token.user = {
          id: user.id,
          email: user.email,
          name: user.name,
        };
        return token;
      }
    },
    session: async ({ session, token }) => {
      // session.accessToken = token?.accessToken;
      // session.refreshToken = token?.refreshToken;
      // session.user = token?.user;
      // session.error = token?.error;
      return session;
    },
  },
  session: { strategy: "jwt" }, // session token expires after 30 mins of user inactivity
  pages: {
    signIn: "/auth/login",
  },
  events: {
    signOut: async ({ token }) => {
      console.log(token, "from logout");
    },
  },
});

export interface IAuthUserSigninResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  accessTokenExpiry: number;
}

export type CredentialsServerResponseModel<T> = {
  data: T;
  status: string;
  message: string;
};
