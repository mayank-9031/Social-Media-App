import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Connectify</h3>
          <p className="loginDesc">
            Connect with friends and the world
            <br />
            around you on Connectify.
          </p>
        </div>
        <div className="loginRight">
          <div className="registerBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Already A User</button>
          </div>
        </div>
      </div>
    </div>
  );
}
