import React from 'react';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return <Provider store={store}></Provider>;
}

export default App;
