import React from 'react';
import "./login.css"

export function Login() {
  return (
      <main>
        <div className="login-border" id="loginBox">
            <div className="login">
                <h3>YOU HAVE QUESTIONS, WE HAVE ANSWERS</h3>
                <p>Login to Ask A Question</p>
                
                <label>Username</label>
                <input type = "text" id="name" placeholder="Username" />
                <label>Password</label>
                <input type="text" id="password" placeholder="Password" />
                <button type="submit" onclick="login()">Login</button>
                <button type="submit" onclick="createaccount()">Create Account</button>
            
            </div>
        </div>
    </main>
  );
}