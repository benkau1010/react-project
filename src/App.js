import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyForm/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textAlign: "center",
            backgroundColor: "Blue"
          }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MyInput(props) {
  return <><p>{props.text1} </p><input placeholder={props.text2}/></>
}

function MySubmit(props) {
  return <button>{props.text}</button>
}

function MyForm() {
  return <>
  <MyInput text1="What is your favorite movie?" text2="My favorite movie is..."/>
  <MyInput text1="What is your favorite class?" text2="My favorite class is..."/>
  <MyInput text1="What is your favorite food" text2="My favorite food is..."/>
  <p></p>
  <MySubmit text="Submit"/>
  <MySubmit text="Cancel"/>
  </>
}

export default App;
