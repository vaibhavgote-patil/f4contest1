import React, { useState } from "react";


const App = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const userEmail = document.getElementById("user-mail");
    // const userPassword = document.getElementById("user-password");
    // const userPasswordConfirm = document.getElementById("user-password-confirm");

    // if(email.endsWith("@gmail.com")){
    //   userEmail.style.borderColor = 'green'
    // }

    
    function handleSubmit(){
      if((email.endsWith("@gmail.com")) && (password.length>= 8) && (password == confirmPassword)){
        alert("User form submitted");
      }else if(password != confirmPassword){
        alert("password not match")
      }
    }
    

    return(
      <form id="main-form" onSubmit={handleSubmit}>

        <div className="field" id="email">
          <label><b>Email:</b></label><br/>
          <input 
            type="email" 
            id="user-email" 
            name="email" 
            required
            onChange={e =>{setEmail(e.target.value)}}>
          </input>
          {
            email.endsWith("@gmail.com") ?  <p></p> : <p className="text">Invalid email format</p>
          }
          {/* {
            email.endsWith("@gmail.com") ?  userEmail.style.borderColor = 'tomato': userEmail.style.borderColor = "green" 
          } */}
        </div>

        <div className="field" id="password">
          <label><b>Password:</b></label><br/>
          <input 
            type="password" 
            id="user-password" 
            name="email" 
            required
            onChange={e =>{setPassword(e.target.value)}}>
          </input>
          {
            (password.length>= 8) ? <p></p> : <p className="text">Password must be at least 8 characters</p> 
          }
          {/* {
            (password.length>= 8) ?  userPasswordConfirm.style.borderColor = "tomato": userPasswordConfirm.style.borderColor = "green"
          } */}
          
        </div>

        <div className="field" id="confirm-password">
          <label><b>Confirm Password:</b></label><br/>
          <input 
            type="password" 
            id="user-password-confirm" 
            name="email" 
            required
            onChange={e =>{setConfirmPassword(e.target.value)}}>
          </input>
          {
            (password == confirmPassword) && (password!="") ? <p></p> : <p className="text">Password do not match</p> 
          }
          {/* {
            (password == confirmPassword) && (password!="") ?
             userPasswordConfirm.style.borderColor = "tomato" : userPasswordConfirm.style.borderColor = "green"
          } */}
        </div>

        <div className="field" id="btn-container">
          <button id="signup-btn">Sign Up</button>
        </div>
        
      </form>   
    )
}

export default App;
