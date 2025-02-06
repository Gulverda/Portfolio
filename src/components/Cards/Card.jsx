import '../../CSS/Card.css'; 

const Card = ({ icon, title, description }) => (
  <div className="card">
    <span className="icon">{icon}</span>
    <h4>{title}</h4>
    <p>{description}</p>
    <div className="shine"></div>
    <div className="background">
      <div className="lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      <div className="tiles">
        <div className="tile tile-1" style={{ "--fromX": "0px", "--fromY": "0px", "--toX": "100px", "--toY": "100px" }}></div>
        <div className="tile tile-2" style={{ "--fromX": "10px", "--fromY": "20px", "--toX": "90px", "--toY": "80px" }}></div>
        <div className="tile tile-3" style={{ "--fromX": "20px", "--fromY": "40px", "--toX": "80px", "--toY": "60px" }}></div>
        <div className="tile tile-4" style={{ "--fromX": "30px", "--fromY": "60px", "--toX": "70px", "--toY": "40px" }}></div>
        <div className="tile tile-5" style={{ "--fromX": "40px", "--fromY": "80px", "--toX": "60px", "--toY": "20px" }}></div>
        <div className="tile tile-6" style={{ "--fromX": "50px", "--fromY": "100px", "--toX": "50px", "--toY": "0px" }}></div>
        <div className="tile tile-7" style={{ "--fromX": "60px", "--fromY": "120px", "--toX": "40px", "--toY": "-20px" }}></div>
        <div className="tile tile-8" style={{ "--fromX": "70px", "--fromY": "140px", "--toX": "30px", "--toY": "-40px" }}></div>
        <div className="tile tile-9" style={{ "--fromX": "80px", "--fromY": "160px", "--toX": "20px", "--toY": "-60px" }}></div>
        <div className="tile tile-10" style={{ "--fromX": "90px", "--fromY": "180px", "--toX": "10px", "--toY": "-80px" }}></div>
      </div>
    </div>
  </div>
);

export default Card;
