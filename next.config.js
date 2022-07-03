module.exports = {
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
				source: '/fonts/TTHovesVariable.woff2',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable'
					}
				]
			},
			{
				source: '/fonts/JetBrainsMono.woff2',
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
