const initialState = {
  playlists: [],
  tracks: [],
};

const PlayListsReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case "GET_PLAYLISTS":
      console.log(action.playlists);
      return { ...state, playlists: action.playlists };
    case "GET_SONGS":
      console.log(action.tracks);
      return { ...state, tracks: action.tracks };
    default:
      return state;
  }
};

export default PlayListsReducer;
