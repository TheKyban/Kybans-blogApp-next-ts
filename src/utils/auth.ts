import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth/next";
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    pages: {
        signIn: "/login",
    },
    secret:process.env.NEXTAUTH_SECRET
};

export const authSession = async () => {
    return await getServerSession(authOptions);
};
