import './App.css';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Form from './components/Form/Form';
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      {/* <Form /> */}
    </div>
  );
}

export default App;
