import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Authorize
import { getAccessTokenFormURL } from "./Authorization/authorizeConfig";
// Components
import Login from "./components/Login/Login";
import HomePage from "./pages/Home/HomePage";
// Style
import "./app.scss";

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
  }, [dispatch]);

  return token ? <HomePage token={token} /> : <Login />;
}

export default App;
