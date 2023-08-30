const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    // domains: ['res.cloudinary.com']
    domains: ["ovxuyrukzdqmaklnapwf.supabase.co"],
  },
  async headers() {
    return [
      {
        source: "/fonts/TTHovesVariable.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/JetBrainsMono.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
});
