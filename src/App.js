import './App.css';
import axios from 'axios';
import react, { useState } from 'react';

function App() {
    const [text, setText] = useState("Code goes here");
    const [response, setResponse] = useState("Output");

  const sendCode = async (event) => {
    event.preventDefault();
    const config = {
      headers:{
        "Content-Type":"text/plain"
      }
    }
    try{
      setResponse("Loading...");
      let res = await axios.post("http://127.0.0.1:8080",text,config);
      setResponse(res.data);
    }catch(error){}
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const renderResponse = () => {
    return (
      <div>
        {response != "" && <p>{response}</p>}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Code compiler!</h1>
      <textarea value={text} className="inputCode" onChange={handleChange}/>
      <button className="inputButton" onClick={sendCode}>Send kode</button>
      <p>Output:{renderResponse()}</p>
    </div>
  );
}

export default App;
