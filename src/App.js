import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Homepage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import store from './redux/store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:coinId" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  </Provider>
);

export default App;
