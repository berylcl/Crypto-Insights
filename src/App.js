import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';

import './App.css';

const App = () => (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
          </Routes>
        </Router>
      </div>
    </Provider>
);

export default App;
