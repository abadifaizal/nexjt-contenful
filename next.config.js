/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Tell Nextjs Domains allowed to use the Image component (from contentful domain)
    domains: ["images.ctfassets.net"],
  },
}

module.exports = nextConfig