const client_id = process.env.REACT_APP_CLIENT_ID;
const response_type = "token";
const scope = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-top-read",
  "playlist-read-private",
  "playlist-modify-private",
  "streaming",
  "user-read-email",
  "user-read-private",
];
const redirect_uri = "http://localhost:3000";

export const loginURL = `https://accounts.spotify.com/authorize?response_type=${response_type}&client_id=${client_id}&scope=${scope.join(
  "%20"
)}&redirect_uri=${redirect_uri}&show_dialog=true`;

export function getAccessTokenFormURL() {
  const tokenObj = window.location.hash.substring(1).split("&").reduce((initial, item) => {
    const key = item.split('=');
    initial[key[0]] = decodeURIComponent(key[1]);
    return initial;
  }, {});
  return tokenObj?.access_token;
}