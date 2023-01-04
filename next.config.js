/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['ja', 'ko'],
    defaultLocale: 'ja',

    domains: [
      {
        domain: 'chocolat.jp',
        defaultLocale: 'ja',
      },
      {
        domain: 'chocolat.kr',
        defaultLocale: 'ko',
      },
    ],
  },
});
