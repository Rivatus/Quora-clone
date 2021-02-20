import './App.css';
import Ask from './Pages/Ask.js';
import Navbar from './Components/navbar/navbar.js';
import LoginPage from './Pages/Login.js';
import Answer from './Pages/Answer.js';
import HomePage from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/ask">
            <Ask />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/answer/:id">
            <Answer />
          </Route>
          <Route path="/">
            <h1 style={{ marginTop: "200px" }}>
              <HomePage />
            </h1>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
