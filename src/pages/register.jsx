import { useState } from "react";
import "./Login.css";

function Register() {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  function saveUser() {

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    let obj = {
      username: name,
      password: pass
    };

    users.push(obj);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    setMsg("Registration Successful");

    setName("");
    setPass("");
  }

  return (

    <div className="main">

      <div className="box">

        <h2>Shopping Cart</h2>

        <p>Register Page</p>

        <input
          type="text"
          placeholder="Create Username"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Create Password"
          value={pass}
          onChange={(e) =>
            setPass(e.target.value)
          }
        />

        <button onClick={saveUser}>
          Register
        </button>

        <p className="success">
          {msg}
        </p>

      </div>

    </div>
  );
}

export default Register;