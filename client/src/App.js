import './App.css';
import AskForm from './Components/ask/ask.js';
import Navbar from './Components/navbar/navbar.js'
function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <AskForm />
      </header>
    </div>
  );
}

export default App;
