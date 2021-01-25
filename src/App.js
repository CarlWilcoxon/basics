import logo from './logo.svg';
import React, { useState } from 'react';
import {Button, Typography} from '@material-ui/core';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // Create spin counter, once every 10 seconds.
    

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography>
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <Button 
          variant="contained"
          color="primary" 
          href="https://reactjs.org"
        >
          Learn React
        </Button>
        <Typography>You clicked {count} times</Typography>
        <Button onClick={ () => {
            setTimeout(() => { setCount(count + 1) }, 200)
          }
        }>
          Click me
        </Button>
      </header>
    </div>
  );
}

export default App;
