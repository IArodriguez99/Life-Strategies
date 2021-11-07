import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Form from './components/Form/Form';
import About from './components/About/About'
import Service from './components/Service/Service'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Home />
        <About />
        <Service />
        <Form />
        <Switch>
            <Route Path="/">
              
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
