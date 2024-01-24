/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plrzrmkbxpfnvsdtqdwc.supabase.co'
      }
    ]
  }
}

module.exports = nextConfig
