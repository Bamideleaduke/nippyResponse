const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Remove `.svg` from asset extensions
  config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== "svg"
  );

  // Add `.svg` to source extensions
  config.resolver.sourceExts.push("svg");

  // Use react-native-svg-transformer for `.svg` files
  // config.transformer = {
  //   babelTransformerPath: require.resolve("react-native-svg-transformer"),
  // };

  return config;
})();
