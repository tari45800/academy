/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  async redirects() {
    return [
      {
        source: '/signin',
        destination: '/TSpages/Login',
        permanent: false,
      },
      {
        source: '/signup',
        destination: '/TSpages/JoinUs',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
