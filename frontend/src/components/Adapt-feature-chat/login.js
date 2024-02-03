import React, { useState, useRef, useEffect } from "react";
import "../auth/login.css";
import axios from "axios";
import { Alert } from "react-bootstrap";
import Log from "../img/log.svg";
import Profile from "../img/profile.svg";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  //console.log(props)

  //login
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    await axios
      .post("https://stealth-backend.onrender.com/api/auth/login", data)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("email", res.data.user.email);
        sessionStorage.setItem("name", res.data.user.name);
        props.setName(res.data.user.name);
        props.setEmail(res.data.user.email);
        props.setLogin(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //error message
  function AlertDismissibleExample() {
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <p>{msg}</p>
        </Alert>
      );
    }
    return null;
  }
  console.log(props);
  //<img className="login-profile" src={Profile} alt="profile-girl"></img>
  return (
    <div className="login">
      <div className="forms-container">
        <img src={Log} className="login-image" alt="login-image"></img>
        <form className="sign-in-form">
          <AlertDismissibleExample />
          <img className="login-profile" src={Profile} alt="profile-girl"></img>
          <h2 className="title">Login</h2>
          <div className="input-login">
            <i class="fas fa-user"></i>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="input-login">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            className="new-user"
            onClick={() => {
              props.setregorlog(true);
            }}>
            Do not have an Account?
          </button>
          <input
            className="submit-login"
            type="submit"
            value="Login"
            onClick={(e) => {
              onSubmit(e);
            }}
          />
        </form>
      </div>
    </div>
  );
}
