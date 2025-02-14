import '../../CSS/Buttons.css';

const HintComponent = () => {
  return (
    <div className="item-hints" style={{position: "absolute"}}>
      <div className="hint" data-position="4">
        <span className="hint-radius"></span>
        <span className="hint-dot">INFO</span>
        <div className="hint-content do--split-children">
          <p style={{maxWidth: "350px", fontSize: "16px"}}>I am Junior/Middle <span style={{color: "#00ffef"}}> React.JS/TS </span> Front-End Developer with a drive to become a proficient Full-Stack <span style={{color: "#00ffef"}}> MERN </span> Web Developer. Explore my projects and skills!</p>
        </div>
      </div>
    </div>
  );
}

export default HintComponent;
