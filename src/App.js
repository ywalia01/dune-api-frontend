import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './components/css/App.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Home from './Routes/Home';
import Docs from './Routes/Docs';
import Login from './Routes/Login';
import SignUp from './Routes/SignUp';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header/>
        <Switch>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/signup">
            <SignUp/>
          </Route>

          <Route path="/docs">
            <Docs/>
          </Route>
          
          <Route exact path="/">
            <Home/>
          </Route>

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
