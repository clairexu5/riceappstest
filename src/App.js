import React, {useState} from 'react';
import dog from './dogpicture.jpeg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [component, setComponent] = useState(<h1>Team Family Wiess</h1>);
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Claire Xu</h1>
          <img src={dog} className="App-logo" alt="dogpic" />
          <a
            className="App-link"
            href="http://www.teamwiess.com/"
          >
            Wiess is pretty cool!
          </a>
        </header>
      </div>
      <div>
        {component}
        <button onClick={() => setComponent(<h4>Yuh</h4>)}>
            Click me!
        </button>
      </div>
    </div>
  )}    

export default App;