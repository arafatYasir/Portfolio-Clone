/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zonayed.me',
      },
    ],
  },
};
export default nextConfig;
