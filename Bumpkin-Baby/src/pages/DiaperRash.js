import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DiaperRash.css";

const DiaperRash = () => {
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
    <div className="diaper-rash-div">
      <div className="line-div7" />
      <button className="home-nav-button7" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div40" />
        <img className="vector-icon6" alt="" src="../vector.svg" />
        <div className="home-div6">Home</div>
      </button>
      <button className="scanner-nav-button7" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div40" />
        <img className="scan-w-icon6" alt="" src="../scan-w1@2x.png" />
        <div className="diagnosis-div9">Diagnosis</div>
      </button>
      <button
        className="chatroom-nav-button7"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div40" />
        <img className="game-w-icon7" alt="" src="../game-w@2x.png" />
        <b className="play-game-b7">Play Game</b>
      </button>
      <button className="profile-nav-button7" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div40" />
        <img className="profile-w-icon6" alt="" src="../profile-w1@2x.png" />
        <div className="profile-div7">Profile</div>
      </button>
      <div className="frame-div3">
        <button className="button5">
          <div className="rectangle-div44" />
          <div className="log-in-div7">Play game</div>
        </button>
        <div className="group-div4">
          <img className="cloud-icon3" alt="" src="../cloud3@2x.png" />
          <div className="i-had-a-diaper-rash-growing-up">
            I had a diaper rash growing up, it’s mainly caused by not changing
            your diapers often. the rash grows in warm, moist places. to combact
            this rash, you must keep the baby clean and make sure your baby is
            wearing the right size diaper. a soothing cream such as ‘triple
            paste’ or ‘desitin’ would be helpful
          </div>
          <img className="girl-icon1" alt="" src="../girl1@2x.png" />
        </div>
        <div className="diaper-rash-div1">
          <span className="diaper-span">Diaper</span>
          <span className="span9">{` `}</span>
          <span className="diaper-span">rash</span>
        </div>
      </div>
      <div className="logo-div8">
        <div className="baby-got-rash8">Bumpkin baby</div>
        <img className="group-icon8" alt="" src="../group8.svg" />
      </div>
    </div>
  );
};

export default DiaperRash;
