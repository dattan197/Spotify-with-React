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
import { useDispatch, useSelector } from "react-redux";


function App() {

  const token = useSelector((state) => state.UserReducer.token);

  const dispatch = useDispatch();

  useEffect(() => {
    let _token = getAccessTokenFormURL();
    if (!_token) return;
    //window.history.pushState({}, null, "/");
    dispatch({
      type: "SET_TOKEN",
      _token,
    });
  }, []);

  return token ? <HomePage token={token} /> : <Login />;
}

export default App;
