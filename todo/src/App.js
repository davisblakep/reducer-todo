import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoSection from './components/TodoSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reducer Todo
        </p>
        <div className="todo-class">
          <TodoSection />
        </div>
      </header>
    </div>
  );
}

export default App;
