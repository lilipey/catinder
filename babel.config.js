module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        // Ajoutez ici des plugins si nécessaire
        'react-native-reanimated/plugin', // Nécessaire pour react-native-reanimated
      ],
    };
  };