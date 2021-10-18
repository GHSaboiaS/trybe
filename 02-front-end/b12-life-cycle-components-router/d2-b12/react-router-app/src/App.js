import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Legal from './Legal';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/contact" component={ Contact } />
      <Route path="/legal" component={ Legal } />
    </BrowserRouter>
  );
}

export default App;
