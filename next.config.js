const fontPaths = [
  '/fonts/Inter-Regular.woff',
  '/fonts/Inter-Regular.woff2',
  '/fonts/Inter-Medium.woff',
  '/fonts/Inter-Medium.woff2',
  '/fonts/Inter-SemiBold.woff',
  '/fonts/Inter-SemiBold.woff2',
  '/fonts/Inter-Bold.woff',
  '/fonts/Inter-Bold.woff2',
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return fontPaths.map((fontPath) => ({
      source: fontPath,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=16070400',
        },
      ],
    }));
  },
};

module.exports = nextConfig;
