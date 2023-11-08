import React, { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");


  function login(){
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: inputUser,
        password: inputPass
      }),
    }).then(response => {
      return response.json()
    })
    .then(data => {
      if (data.length>0){
        setMessage("your information is "+ JSON.stringify(data));
        
        
      }
      else{
        setMessage("access denied, please recheck your username or password")
      }
      
    });

    
    
  } 

  return (
    <div className="app">
     
				<div> 
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" onChange={(e) => setInputUser(e.target.value)}/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw" onChange={(e) => setInputPass(e.target.value)}/> 
				</div>  
				<button type="submit" onClick={login}>Login</button>
        <div>{message}</div>
		
    </div>
  );
}

export default App;
