const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname); // Pass __dirname to get the default config

  return {
    ...config, // Spread default config to avoid breaking asset resolution
    transformer: {
      ...config.transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      ...config.resolver,
      assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...config.resolver.sourceExts, 'svg'],
    },
  };
})();
