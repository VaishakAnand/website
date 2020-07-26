import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { About } from './About';
import { Others } from './Others';
import { Mismatch } from './Mismatch';
import { Layout } from './components/Layout';
import CustomNavbar from './components/CustomNavbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <CustomNavbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/website/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/others' component={Others} />
            <Route component={Mismatch} />
          </Switch>
      </Router>
    </React.Fragment>
    // <About />
  );
}

export default App;
