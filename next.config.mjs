/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.publicPath = "_next/";
    }
    return config;
  },
};

export default nextConfig;
