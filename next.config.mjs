/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "loremflickr.com",
        port: "",
      },
      {
        hostname: "picsum.photos",
        port: "",
      },
    ],
  },
  // disable browser source maps in production
  //productionBrowserSourceMaps: false,
};

export default nextConfig;
