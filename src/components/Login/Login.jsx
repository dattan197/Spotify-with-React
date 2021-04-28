import Spotify_logo from "../../assets/Spotify_logo.jpg";
import { loginURL } from "../../Authorization/authorizeConfig";
import "./login.scss";
const Login = () => {
  return (
    <div className="login__container">
      <img src={Spotify_logo} alt="spotify-logo" />
      <a className="btn login-btn" href={loginURL}>
        Login with spotify
      </a>
    </div>
  );
};

export default Login;