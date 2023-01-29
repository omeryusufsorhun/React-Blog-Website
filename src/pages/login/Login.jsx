import { Link } from "react-router-dom";
import "./login.css";
export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">login</span>
      <form className="loginForm">
        <label htmlFor="">email</label>
        <input className="loginInput" type="text" placeholder="email..." />
        <label htmlFor="">password</label>
        <input className="loginInput" type="text" placeholder="password..." />
        <button className="loginButton">login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
