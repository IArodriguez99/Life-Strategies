import './App.css'
import './index.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import About from './components/About/About'
import Service from './components/Service/Service'
import Counseling from './components/Counseling/Counseling'
import Service_Row from './components/Service_Row/Service_Row'
import Hero from './components/Hero/Hero'
import Trauma from './components/Trauma/Trauma'
import Footer from './components/Footer/Footer'
import Faith from './components//Faith.js/Faith'

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
              <Counseling />
              <Service_Row />
              <Hero />
              <Trauma />
            </Route>
          </div> 
          <Footer />
          <div className="content">
            <Route path="/faith" component={Faith}>
              <Faith />
            </Route>
          </div>
    </Router>
  );
}

export default App;
