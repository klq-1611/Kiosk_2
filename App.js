import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux'
import { store } from './store'



export default function App() {
  return (

    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

