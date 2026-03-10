import { Poppins, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import config from '../config/config.json';
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: `${config.name} Network`,
	description:
		`${config.name} Network is created with you in mind! Are you looking for a minecraft server where you can spend your free time and at the same time play with your friends? Check out our server and you will definitely not be disappointed!',
	robots: 'noindex, nofollow`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={cn("font-mono", jetbrainsMono.variable)}>
			<body className={`${poppins.variable} antialiased`}>{children}</body>
		</html>
	);
}
