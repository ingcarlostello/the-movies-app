import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import TopFive from './components/TopFive';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AddMovie />
      <TopFive />
    </div>
  );
}

export default App;
