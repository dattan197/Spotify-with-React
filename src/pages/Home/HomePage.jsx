import { useState } from "react";

// Components
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

// Assets
import background from "../../assets/background.jpg";

const HomePage = () => {
  // state to trigger open sidebar
  const [open, setOpen] = useState(false);

  function toggleSidebar() {
    setOpen((currOpen) => !currOpen);
  }

  return (
    <>
      <img className="background" src={background} alt="background-img" />
      <div className="filter" />
      <main id="main">
        <Header toggleSidebar={toggleSidebar} />
        <section id="audio-info">
          <div className="audio-info__wrapper container">
            <div className="title">
              <h1>Higher Ground ft. Naomi Wild</h1>
            </div>
            <div className="image">
              <div className="image__wrapper">
                <img src={background} alt="audio-img" />
              </div>
            </div>
          </div>
        </section>

        <section id="audio-list">
          <div className="container d-flex">
            <div className="playlist">
              <div>
                <h3>Playlist</h3>
              </div>
              <div className="list__wrapper">
                <ul className="list">
                  <li className="list-item">
                    <img
                      className="audio-img"
                      src={background}
                      alt="song-img"
                    />
                    <p>
                      <span>Song</span> name
                    </p>
                  </li>
                  <li className="list-item">
                    <img
                      className="audio-img"
                      src={background}
                      alt="song-img"
                    />
                    <p>
                      <span>Song</span> name
                    </p>
                  </li>
                  <li className="list-item">
                    <img
                      className="audio-img"
                      src={background}
                      alt="song-img"
                    />
                    <p>
                      <span>Song</span> name
                    </p>
                  </li>
                  <li className="list-item">
                    <img
                      className="audio-img"
                      src={background}
                      alt="song-img"
                    />
                    <p>
                      <span>Song</span> name
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="audio-player">
          <div className="player__wrapper container">
            <audio id="player">
              <source src="https://p.scdn.co/mp3-preview/01bb2a6c9a89c05a4300aea427241b1719a26b06" />
            </audio>
            <button className="btn-previous">
              <i className="fa fa-backward" />
            </button>
            <button className="btn-play">
              <i className="fa fa-play" />
            </button>
            <button className="btn-pause">
              <i className="fa fa-pause" />
            </button>
            <button className="btn-next">
              <i className="fa fa-forward" />
            </button>
          </div>
        </section>
      </main>
      <Sidebar open={open} />
    </>
  );
};

export default HomePage;
