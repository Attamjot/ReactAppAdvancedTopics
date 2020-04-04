import React from 'react';
import './App.css';
import Counter from './renderProps/Counter';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <Counter 
          render={(count, incrementCounter) => 
                          <ClickCounter count={count} handler={incrementCounter} /> } />

      <Counter 
          render={ (count, incrementCounter) => 
                        <HoverCounter count={count} handler={incrementCounter} /> }/>
    </div>
  );
}

export default App;
