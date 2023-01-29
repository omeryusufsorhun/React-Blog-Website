import "./register.css";
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">register</span>
      <form className="registerForm">
        <label htmlFor="">username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="username..."
        />
        <label htmlFor="">email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="password..."
        />
        <label htmlFor="">password</label>
        <input
          className="registerInput"
          type="text"
          placeholder="password..."
        />
        <button className="registerButton">register</button>
      </form>
      <button className="registerLoginButton">
      <Link className="link" to="/login">Login</Link>

      </button>
    </div>
  );
}
