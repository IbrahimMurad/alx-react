import { React, Fragment } from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label>
          Email:
          <input type="email" name="email" autoComplete="on" />
        </label>
        <label>
          Password:
          <input type="password" name="password" autoComplete="on" />
        </label>
        <button>OK</button>
      </div>
    </>
  );
};

export default Login;
