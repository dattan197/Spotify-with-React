export const addPlaylistAction = (newPlaylist) => {
  return {
    type: "ADD_PLAYLIST",
    newPlaylist,
  };
};

export const deletePlaylistAction = (playlistId) => {
  return {
    type: "DELETE_PLAYLIST",
    playlistId,
  };
};

export const editPlaylistAction = (playlistId, playlistName) => {
  return {
    type: "EDIT_PLAYLIST",
    playlistId,
    playlistName,
  };
};

export const getTracksFromPlaylist = (tracks) => {
  return {
    type: "GET_TRACKS",
    tracks,
  };
};

export const deleteMusicAction = (playlistId, musicId) => {
  return {
    type: "DELETE_MUSIC",
    playlistId,
    musicId,
  };
};
