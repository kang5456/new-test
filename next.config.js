module.exports = {
  env: {
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID:
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  },
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.m?js/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'next/babel',
              {
                'preset-env': {
                  modules: 'commonjs',
                },
              },
            ],
          ],
        },
      },
    });

    return config;
  },
};
