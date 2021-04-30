import { useEffect, useState } from "react";
// Authorize
import { getAccessTokenFormURL } from "./Authorization/authorizeConfig";
// Components
import Login from "./components/Login/Login";
import HomePage from "./pages/Home/HomePage";
// Style
import "./app.scss";
//import { accessToken } from "./config/config";
// Spotify API
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    let _token = getAccessTokenFormURL();
    if (!_token) return;
    setToken((token) => (token = _token));
    spotifyApi.setAccessToken(_token);
    //window.history.pushState({}, null, "/");
    spotifyApi
      .getMe()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    return () => {
      setToken(null);
    };
  }, []);

  return token ? <HomePage token={token} /> : <Login />;
}

export default App;