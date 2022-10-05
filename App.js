import React from 'react'
import { Provider } from 'react-redux';
import { store } from './src/store/reducers';

//screens
import Dashboard from './src/screens/Dashboard';


export default function App() {
  return (
    <Provider store={store} >
      <Dashboard />
    </Provider>
  )
}
