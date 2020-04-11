import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const NoPageFound = (props) => {
  console.log(props)
  return (
    <div>
      <h3>No Page Found with {props.location.pathname} route</h3>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NoPageFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
