import './audioInfo.scss'

const AudioInfo = ({title, image}) => {

  return (
    <section id="audio-info">
      <div className="audio-info__wrapper container">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="image">
          <div className="image__wrapper">
            <img className="audio-img" src={image} alt="audio-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioInfo;