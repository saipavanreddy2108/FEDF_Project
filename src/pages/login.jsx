import { useState } from "react";
import "./Login.css";

function Login() {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  function checkLogin() {

    let data =
      JSON.parse(localStorage.getItem("users")) || [];

    let found = false;

    data.forEach((item) => {

      if (
        item.username === name &&
        item.password === pass
      ) {
        found = true;
      }

    });

    if (found) {

      localStorage.setItem("login", "yes");

      alert("Login Success");

    } else {

      setMsg("Wrong Username or Password");

    }
  }

  return (

    <div className="main">

      <div className="box">

        <h2>Shopping Cart</h2>

        <p>Login Page</p>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPass(e.target.value)
          }
        />

        <button onClick={checkLogin}>
          Login
        </button>

        <p className="error">{msg}</p>

      </div>

    </div>
  );
}

export default Login;