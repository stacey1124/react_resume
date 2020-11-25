import logo from './logo.svg';
import './App.css';
import Resume from './js/resume'
import Add from './js/campus_settings'

function App() {
  return (
    <div className="App">
      <Resume />
      <Add />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
