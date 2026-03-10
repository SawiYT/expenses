/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	distDir: 'dist',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'skins.mcstats.com',
				pathname: '/**', // Ścieżka do obrazów, tutaj '**' oznacza wszystkie ścieżki
			},
		],
	},
};

export default nextConfig;
