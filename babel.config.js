module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      //  for nativewind
      'nativewind/babel',
      // for reanited animations (should be the last plugin in the array list)
      'react-native-reanimated/plugin',
    ],
  };
};
