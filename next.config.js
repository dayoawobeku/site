/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    assetPrefix: isProd ? 'https://vercel.com/wolfheadtv1/site/4eAU3AMgc8wSvskPtqz3ZSqcdNgW' : './',
    images: {
        domains: [
            'headless.local',
            '0.gravatar.com',
            '1.gravatar.com',
            '2.gravatar.com',
            'i.gr-assets.com',
            's.gr-assets.com',
            'books.google.com'
        ],
    },
}

module.exports = nextConfig
