import React, { useState,useEffect } from "react";
import "./App.css";
import { Password } from 'primereact/password';

function App() {
  const [message, setMessage] = useState("");
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");


  function login(){
    fetch("http://localhost:5000/simple-login", {
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
					<Password type="text" name="passw" id="passw" feedback={false} onChange={(e) => setInputPass(e.target.value)}/> 
				</div>  
				<button type="submit" onClick={login}>Login</button>
        <div>{message}</div>
		
    </div>
  );
}

export default App;

//import React from "react";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import "./App.css";
//
//
//import Login from "./login"; 
//
//function App() {
//
//  return (
//    <Router>
//      <Routes>
//        <Route path="/simple-login" element={<Login />} />
//      </Routes>
//    </Router>
//  );
//}
//
//export default App;
