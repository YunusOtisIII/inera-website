import { NextAuthOptions } from "next-auth";

// Configuration NextAuth simplifiée (authentification désactivée temporairement)
export const authOptions: NextAuthOptions = {
  providers: [],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/auth/signin",
  },
};
