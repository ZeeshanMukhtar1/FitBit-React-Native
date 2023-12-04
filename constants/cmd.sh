
# Create a bare minimum Expo Router app using tabs template
npx create-expo-app@latest --template tabs@49

# Add Nativewind (stable version) to Expo app
npm install nativewind
npm install --save-dev tailwindcss@3.3.2
npx tailwindcss init

# Configure Tailwindcss for usage in specified files
# Update 'content' and 'plugins' sections in tailwind.config.js
# Example content configuration for Expo app structure
# content: [
#   './App.{js,jsx,ts,tsx}',
#   './app/**/*.{js,jsx,ts,tsx}',
#   './components/**/*.{js,jsx,ts,tsx}',
# ]

# Install React Native Responsive Screen for responsiveness
npm install react-native-responsive-screen

# Install Expo Linear Gradient for linear gradient support
npm install expo-linear-gradient

# For adding animation to the screens
# Commenting out react-native-reanimated due to potential compatibility issues
# npm install react-native-reanimated
# Sometimes it may create an issue of SDK version compatibility

# Install Expo version of react-native-reanimated
npx expo install react-native-reanimated
# Install Reanimated plugin
npm install react-native-reanimated/plugin

# Start Expo with cache reset
npm start -- --reset-cache