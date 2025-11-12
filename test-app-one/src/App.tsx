import React from 'react';
import logo from './logo.svg';
import './App.css';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

const person: Person = {
  firstName: "Emily",
  lastName: "Ludwik",
  age: 29
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>I am {person.firstName} {person.lastName} and I am {person.age} years old!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
