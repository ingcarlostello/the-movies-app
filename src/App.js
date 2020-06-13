import React from 'react';
import MovieProvider from './context/MovieContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import TopFive from './components/TopFive';
import './scss/App.scss';

function App() {
  return (
    <MovieProvider>
      <Router>
      <div className="App">
        <Navbar />
        <Switch>   
          <Route path="/top-five">
            <TopFive />
          </Route>       
          <Route path="/add-movie">
            <AddMovie />
          </Route>          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </MovieProvider>
  );
}

export default App;
