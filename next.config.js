const ACCESS_BACKEND_SERVER = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      // {
      //   source: "/api/filteringAccommodationList",
      //   // destination: 'http://sg.petandbe.com/filteringAccommodationList',
      //   destination: 'http://192.168.35.9:8080/filtering/accommodation',
      // },
      {
        source: "/api/filteringAccommodationList",
        // destination: 'http://sg.petandbe.com/filteringAccommodationList',
        destination: 'http://localhost:8080/filteringAccommodationList',
      },
      {
        source: "/api/accommodationFilter/:id",
        destination: `http://192.168.35.9:8080/accommodation/8`,
      },
      // {
      //   source: "/api/movies/:id",
      //   destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      // },
    ];
  },
}

module.exports = nextConfig
