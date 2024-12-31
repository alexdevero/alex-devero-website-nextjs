// const isProd = process.env.NODE_ENV === 'production'
// const assetPrefix = isProd ? 'https://alexdevero.com/demos/ad-next/' : ''

module.exports = {
  // Use the CDN in production and localhost for development.
  // assetPrefix: isProd ? 'https://alexdevero.com/demos/ad-next/' : '',
  // env: {
  //   ASSET_PREFIX: assetPrefix,
  // }
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js'
        }
      }
    }
  }
}
