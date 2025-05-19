/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use export instead of standalone for Netlify
  output: 'export',
  // Disable server components since we're using static export
  images: {
    unoptimized: true,
  },
  // Enable both app and pages directories
  experimental: {
    appDir: true,
  },
  // Ensure success page is included in export
  trailingSlash: true,
}

export default nextConfig
