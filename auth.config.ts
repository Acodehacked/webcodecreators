import type { NextAuthOptions } from "next-auth";

const authConfig: NextAuthOptions = {
  providers: [
    
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login"
  }
};

export default authConfig;