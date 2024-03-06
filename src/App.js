import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [numQuestionsToDisplay, setNumQuestionsToDisplay] = useState(0);

  const handleClick = () => {
    console.log(numQuestionsToDisplay);
    setNumQuestionsToDisplay(numQuestionsToDisplay + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyForm numQuestions={numQuestionsToDisplay} handleFunction={handleClick}/>
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
  return <button onClick={props.handleFunction}>{props.text}</button>
}

function MyForm(props) {
  return <>
  {props.numQuestions >= 1&&<MyInput text1="What is your favorite movie?" text2="My favorite movie is..."/>}
  {props.numQuestions >= 2&&<MyInput text1="What is your favorite class?" text2="My favorite class is..."/>}
  {props.numQuestions >= 3&&<MyInput text1="What is your favorite food"   text2="My favorite food is..." />}
  <p></p>
  <MySubmit text="Submit" handleFunction={props.handleFunction}/>
  </>
}

export default App;
