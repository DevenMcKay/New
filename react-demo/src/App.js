import logo from './logo.svg';
import './App.css';

function App() {

  const red = "reddd"
  
  function blue() {
    return "blueee"
  }

  return (
    <div className="App">
      {red} 
      <br/>
      {blue()}
    </div>
  )
}

export default App;
