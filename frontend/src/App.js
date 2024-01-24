import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewTodo from './NewTodo';

function App() {

  // const res = axios.get("localhost:5000/getTodos")

  

  return (
    <div className="App">
      <NewTodo />
    </div>
  );
}

export default App;
