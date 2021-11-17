import logo from './logo.svg';
import './App.css';
import React from 'react';

//Crerar una function() que nos tiene que devolver la informavion de una variable
function Mostrar() {
	//Escribir la variable siempre debajo de la function
	let elementos = [ "Iryna", "Julia", "David"];

return (
	//Siempre poner en el principio <> y </> en el final para devolver en el return()
	<> 
	<p><ul><li>{elementos}</li></ul></p>

	</>
)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	  < Mostrar />
    </div>
  );
}

export default App;
