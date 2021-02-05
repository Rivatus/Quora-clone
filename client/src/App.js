import './App.css';
import AskForm from './Components/ask/ask.js';
import Navbar from './Components/navbar/navbar.js';
import Login from './Components/Login/login.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/ask">
            <AskForm />
          </Route>
          <Route path="/">
            <h1>
              Home
              </h1>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
