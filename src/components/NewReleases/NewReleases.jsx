import { useState } from "react";
import "./newReleases.scss";

const NewReleases = ({ newAlbums, loading, handleSeclectAlbum }) => {

  function renderAlbumsList(albums) {
    if (albums.length < 1) return "No albums to show!";
    return albums.map((album) => (
      <li className="list-item" key={album?.id} onClick={()=>{handleSeclectAlbum(album)}}>
        <img className="audio-img" src={album?.images[2]?.url} alt="song-img" />
        <p>{album?.name}</p>
      </li>
    ));
  }

  return (
    <section id="audio-list">
      <div className="container d-flex">
        <div className="playlist">
          <div>
            <h3>New releases</h3>
          </div>
          <div className="list__wrapper">
            <ul className="list">{loading ? <img id="loading" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="loading..." /> : renderAlbumsList(newAlbums)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
