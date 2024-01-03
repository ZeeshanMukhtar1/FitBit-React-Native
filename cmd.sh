#  for making a bear minimun expo router app
npx create-expo-app@latest --template tabs@49

#  for adding a nativewind (stable version) to expo app
npm i nativewind
npm i --dev tailwindcss@3.3.2
npx tailwindcss init
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],

   //  for nativewind
       plugins: [
      // Required for expo-router
      'expo-router/babel',
      //  for nativewind
      'nativewind/babel',
    ],

