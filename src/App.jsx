import { useEffect, useState } from "react";

// Authorize
import { getAccessTokenFormURL } from "./Authorization/authorizeConfig";

// Components
import Login from "./components/Login/Login";
import HomePage from "./pages/Home/HomePage";

// Style
import "./app.scss";
import { accessToken } from "./config/config";

// Spotify API
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(() => {
    return sessionStorage.getItem(accessToken);
  });
  //console.log(token);
  useEffect(() => {
    let _token = getAccessTokenFormURL();
    console.log(_token);
    if (!_token) return;
    setToken((token) => (token = _token));
    spotifyApi.setAccessToken(_token);
    window.history.pushState({}, null, "/");
    sessionStorage.setItem(accessToken, _token);
    spotifyApi
      .getMe()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  /*   useEffect(() => {
    if (!token) return;
    spotifyApi
      .getMe()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [token]); */

  return <>{token ? <HomePage /> : <Login />}</>;
}

export default App;
