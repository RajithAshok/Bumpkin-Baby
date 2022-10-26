import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Scanner.css";

const Scanner = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onChatroomNavButtonClick = useCallback(() => {
    navigate("/chatroom");
  }, [navigate]);

  const onProfileNavButtonClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="scanner-div">
      <div className="line-div1" />
      <button className="home-nav-button1" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div11" />
        <img className="vector-icon" alt="" src="../vector.svg" />
        <div className="home-div">Home</div>
      </button>
      <button className="scanner-nav-button1">
        <div className="rectangle-div11" />
        <div className="diagnosis-div1">Diagnosis</div>
        <img className="scan-b-icon" alt="" src="../scan-b@2x.png" />
      </button>
      <button
        className="chatroom-nav-button1"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div11" />
        <b className="play-game-b">Play Game</b>
        <img className="game-w-icon1" alt="" src="../game-w@2x.png" />
      </button>
      <button className="profile-nav-button1" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div11" />
        <img className="profile-w-icon1" alt="" src="../profile-w1@2x.png" />
        <div className="profile-div1">Profile</div>
      </button>
      <div className="logo-div2">
        <div className="baby-got-rash2">Bumpkin baby</div>
        <img className="group-icon2" alt="" src="../group2.svg" />
      </div>
      <div className="frame-div1">
        <button className="image-16-button" />
        <button className="image-17-button" />
        <div className="choose-any-method-of-scanning">
          Choose any method of scanning
        </div>
        <div className="answer-a-few-questions-for-mor">
          Answer a few questions for more accurate results
        </div>
        <input
          className="group-input"
          type="text"
          placeholder="Enter Baby’s gender"
        />
        <input
          className="group-input1"
          type="text"
          placeholder="Enter Baby’s AGE"
        />
        <input
          className="group-input2"
          type="text"
          placeholder="Enter Baby’s SKIN-TYPE"
        />
        <button className="button1">
          <div className="rectangle-div15" />
          <div className="log-in-div3">GET RESULTS</div>
        </button>
      </div>
    </div>
  );
};

export default Scanner;
