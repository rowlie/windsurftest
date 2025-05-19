/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use export instead of standalone for Netlify
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable server components since we're using static export
  experimental: {
    appDir: true,
  },
}

export default nextConfig
