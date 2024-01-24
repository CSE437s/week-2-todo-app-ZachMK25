import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const res = axios.get("localhost:5000/getTodos")

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
