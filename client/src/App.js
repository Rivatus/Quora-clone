import './App.css';
import Ask from './Pages/Ask.js';
import Navbar from './Components/navbar/navbar.js';
import LoginPage from './Pages/Login.js';
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
          <Route path="/">
            <h1 style={{ marginTop: "200px" }}>
              Home
              </h1>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
