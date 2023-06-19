/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    // output: 'export',
    distDir: 'build',
    trailingSlash: true,
    // assetPrefix: isProd ? 'https://davidmc.co' : './',
    images: {
        domains: [
            'localhost',
            'headless.local',
            '0.gravatar.com',
            '1.gravatar.com',
            '2.gravatar.com',
            'i.gr-assets.com',
            's.gr-assets.com',
            'books.google.com'
        ],
    },
    transpilePackages: ['@react-three/drei'],
    experimental: {
        scrollRestoration: true,
    },
}

module.exports = nextConfig
