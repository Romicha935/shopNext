// import type { NextConfig } from "next";

import { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    //experimental: {
    //appDir: false, // ✅ disables the `app/` directory
  //},
    images: {
    domains: ['i.ibb.co.com'],
  },
};

export default nextConfig;



// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'i.ibb.co',      // সঠিক hostname
//         pathname: '/**',           // পুরো path allow
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.ibb.co.com',  // Technically possible, but probably not needed
//         pathname: '/**',
//       },
//     ],
//   },
// };

// export default nextConfig;
