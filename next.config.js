const ACCESS_BACKEND_SERVER = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/filteringAccommodationList",
        // destination: 'http://sg.petandbe.com/filteringAccommodationList',
        destination: 'http://localhost:8080/filteringAccommodationList',
      },
      // {
      //   source: "/api/movies/:id",
      //   destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      // },
    ];
  },
}

module.exports = nextConfig
