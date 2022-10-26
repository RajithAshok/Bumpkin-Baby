import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HeatRash.css";

const HeatRash = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onScannerNavButtonClick = useCallback(() => {
    navigate("/scanner");
  }, [navigate]);

  const onChatroomNavButtonClick = useCallback(() => {
    navigate("/chatroom");
  }, [navigate]);

  const onProfileNavButtonClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="heat-rash-div">
      <div className="line-div5" />
      <button className="home-nav-button5" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div29" />
        <img className="vector-icon4" alt="" src="../vector.svg" />
        <div className="home-div4">Home</div>
      </button>
      <button className="scanner-nav-button5" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div29" />
        <img className="scan-w-icon4" alt="" src="../scan-w1@2x.png" />
      </button>
      <button
        className="chatroom-nav-button5"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div29" />
      </button>
      <button className="profile-nav-button5" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div29" />
        <img className="profile-w-icon4" alt="" src="../profile-w1@2x.png" />
        <div className="profile-div5">Profile</div>
      </button>
      <button className="button3">
        <div className="rectangle-div33" />
        <div className="log-in-div5">Play game</div>
      </button>
      <div className="heat-rash-div1">Heat Rash</div>
      <div className="logo-div6">
        <div className="baby-got-rash6">Bumpkin baby</div>
        <img className="group-icon6" alt="" src="../group6.svg" />
      </div>
      <div className="group-div2">
        <img className="cloud-icon1" alt="" src="../cloud1@2x.png" />
        <img className="girl-icon" alt="" src="../girl@2x.png" />
      </div>
      <div className="rectangle-div34" />
      <div className="my-brother-had-got-heat-rash-a">
        my brother had got heat rash a while ago. it’s caused when sweat ducts
        in the skin gets blocked, creating fluid-filled bumps on the skin. To
        prevent this keep your babies skin cool by placing them in a bath
        without using soap for about 10 mins. let the child air dry as cloth
        could irritate the skin. A steroid cream can also be used.
      </div>
      <div className="diagnosis-div5">Diagnosis</div>
      <div className="diagnosis-div5">Diagnosis</div>
      <b className="play-game-b4">Play Game</b>
      <img className="game-w-icon4" alt="" src="../game-w@2x.png" />
    </div>
  );
};

export default HeatRash;
