import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <label for="email">EMAIL</label>
        <input type="email" name="email" id=""></input>
        <label for="password">PASSWORD</label>
        <input type="password" name="password" id=""></input>
        <button type="button">OK</button>
      </div>
      <footer className="App-footer">
        <p>
          Copyright 2020 - Holberton School
        </p>
      </footer>
    </div>
  );
}

export default App;
