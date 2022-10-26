import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Playgame.css";

const Playgame = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onScannerNavButtonClick = useCallback(() => {
    navigate("/scanner");
  }, [navigate]);

  const onProfileNavButtonClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="playgame-div">
      <div className="line-div2" />
      <button className="home-nav-button2" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div16" />
        <img className="vector-icon1" alt="" src="../vector.svg" />
        <div className="home-div1">Home</div>
      </button>
      <button className="scanner-nav-button2" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div16" />
        <img className="scan-w-icon1" alt="" src="../scan-w1@2x.png" />
        <div className="diagnosis-div2">Diagnosis</div>
      </button>
      <button className="chatroom-nav-button2">
        <div className="rectangle-div16" />
        <b className="play-game-b1">Play Game</b>
      </button>
      <button className="profile-nav-button2" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div16" />
        <img className="profile-w-icon2" alt="" src="../profile-w1@2x.png" />
        <div className="profile-div2">Profile</div>
      </button>
      <div className="logo-div3">
        <div className="baby-got-rash3">Bumpkin baby</div>
        <img className="group-icon3" alt="" src="../group3.svg" />
      </div>
      <img className="game-b-icon" alt="" src="../game-b@2x.png" />
      <div className="frame-div2" />
    </div>
  );
};

export default Playgame;
