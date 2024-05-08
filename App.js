
import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux'
import { store } from './store'
// import axios from 'axios';

// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }



export default function App() {
  return (

    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

