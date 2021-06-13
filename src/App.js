import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Array from './components/Array/Array';

function App() {
  return (
    <div className="App">

      <Router>

        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>

        <Route path="/arrays">
          <Navbar />
          <Array />
        </Route>

      </Router>
      
    </div>
  );
}

export default App;
