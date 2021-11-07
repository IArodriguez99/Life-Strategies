import './App.css';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Form from './components/Form/Form';
import About from './components/About/About'
import Service from './components/Service/Service'
import Counseling from './components/Counseling/Counseling'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Nav />
        <Switch>
        <div className="App">
          <Route exact path="/" component={Home}>
            <Home />
            <About />
            <Service />
            <Form />
          </Route>
        </div>
        <div className="Content">
        <Route path="/counseling" component={Counseling}>
            <Counseling />
          </Route>
        </div>
          
    </Switch>
  </Router>
  );
}

export default App;
