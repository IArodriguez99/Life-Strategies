import './App.css'
import './index.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import About from './components/About/About'
import Service from './components/Service/Service'
import Counseling from './components/Counseling/Counseling'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>  
        <div className="Home">
            <Route exact path="/" component={Home}>
            <Nav />
              <Home />
              <About />
              <Service />
              <Form />
            </Route>
          </div>
          <div className="Content">
            <Route path="/counseling" component={Counseling}>
              <Nav />
              <Home />
            </Route>
          </div>  
    </Router>
  );
}

export default App;
