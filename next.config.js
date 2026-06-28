// const isProd = process.env.NODE_ENV === 'production'
// const assetPrefix = isProd ? 'https://alexdevero.com/demos/ad-next/' : ''

module.exports = {
  async redirects() {
    // The standalone services pages were folded into the personal-brand site.
    // Preserve any inbound links / SEO equity by pointing them at /work.
    return [
      { source: '/services', destination: '/work', permanent: true },
      { source: '/services/:path*', destination: '/work', permanent: true },
    ]
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js'
      }
    }
  },
}
