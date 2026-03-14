import { AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

declare module 'next-auth' {
	interface Session {
		user: {
			id: string;
			name?: string | null;
			email?: string | null;
			image?: string | null;
			isAdmin: boolean;
			createdAt: string;
		};
	}

	interface User {
		isAdmin: boolean;
		createdAt: Date;
	}
}

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),

	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],

	session: { strategy: 'database' },

	secret: process.env.NEXTAUTH_SECRET,
	pages: { signIn: '/login' },

	callbacks: {
		async session({ session, user }) {
			if (session.user) {
				session.user.id = user.id;
				session.user.isAdmin = user.isAdmin;
				session.user.createdAt = user.createdAt.toISOString();
			}
			return session;
		},
	},
};
