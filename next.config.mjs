/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	images: {
		domains: ['res.cloudinary.com']
	},
	async headers() {
		return [
			{
				source: '/fonts/TT Hoves Variable.woff2',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable'
					}
				]
			}
		];
	}
};

export default nextConfig;
