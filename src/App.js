import React from 'react';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    // BEM
    <div className="App">
      <h1>hello world. Let's build Twitter clone</h1>
      {/* {Sidebar} */}
      <Sidebar />
      {/* {Feeds} */}
      {/* {Widget} */}
    </div>

  );
}

export default App;
