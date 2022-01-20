import React from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const inputHandler = (e) => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password,
    };
    axios
      .post("http://localhost:3000/login", data)
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="loginBox">
        <img
          className="user"
          src="https://i.ibb.co/rZrzfBn/user.png"
          height="100px"
          width="100px"
          alt="user"
        />
        <h3>Sign in here</h3>
        <form action="" method="post">
          <div className="inputBox">
            <input
              id="uname"
              type="text"
              name="Username"
              placeholder="Username"
              onChange={(e) => e.target.value}
            />
            <input
              id="pass"
              type="password"
              name="Password"
              placeholder="Password"
              onChange={(e) => e.target.value}
            />
          </div>
          <input type="submit" name="" value="Login" onClick={inputHandler} />
        </form>
        <a href="something">
          Forget Password
          <br />
        </a>
      </div>
    </>
  );
};
export default Login;
