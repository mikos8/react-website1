import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>watsupp</h1>
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
