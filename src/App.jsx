import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Tables from './Table';
import Search from './Search';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Searchable Table</h1>
      <Search />
      <Tables />
    </div>
  </Provider>
);

export default App;
