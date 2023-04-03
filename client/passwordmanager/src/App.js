import './App.css';
import {useState} from 'react'
import Axios from 'axios'
function App() {
  const[password,setPassword]=useState('');
  const[title,setTitle]=useState('');
  const addPassword=()=>{
    console.log("button clicked")
      Axios.post('http://localhost:3001/addpassword',
      {password:password,service:title}
      );
  };
  return (
    <div className="App">
      <div className="AddingPassword">
         <input type='text' placeholder='Application Name' onChange={(event)=>{setTitle(event.target.value
          )}} ></input>
         <input type='text' placeholder='123' onChange={(event)=>{setPassword(event.target.value
          )}}></input>
         {/* <button onClick={addPassword}>Add Password</button>  */}
         <button onClick={addPassword}Add Password>Add Password</button>  
      </div>
    </div>
  );
}

export default App;
