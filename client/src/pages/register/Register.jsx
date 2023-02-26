import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="">username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="password..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">password</label>
        <input
          className="registerInput"
          type="text"
          placeholder="password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{ color: "red" }}>something went wrong</span>}
    </div>
  );
}
