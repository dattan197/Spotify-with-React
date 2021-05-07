const ProgressBar = ({ percent, handleDragBar }) => {
    return (
      <input
        type="range"
        value={percent ? percent : 0}
        style={{ background: "linear-gradient(to right, #82CFD0 0%, #EACCF8 " + percent + "%, transparent " + percent + "%, transparent 100%)" }}
        className="bar"
        min={0}
        max={100}
        onInput={(e) => handleDragBar(e)}
      />
    );
  };
  
  export default ProgressBar;