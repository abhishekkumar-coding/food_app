import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/frontend_assets/assets";

function LoginPopUp({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter Your name" required />
          )}

          <input
            type="email"
            required
            placeholder="Enter Email"
            name=""
            id=""
          />
          <input type="password" placeholder="Enter Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to terms of use & Privacy Policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account? <span onClick={()=>setCurrentState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;
