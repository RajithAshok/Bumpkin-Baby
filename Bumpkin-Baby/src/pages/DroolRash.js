import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DroolRash.css";

const DroolRash = () => {
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

  return (
    <div className="drool-rash-div">
      <div className="line-div6" />
      <button className="home-nav-button6" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div35" />
        <img className="vector-icon5" alt="" src="../vector.svg" />
        <div className="home-div5">Home</div>
      </button>
      <button className="scanner-nav-button6" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div35" />
        <img className="scan-w-icon5" alt="" src="../scan-w1@2x.png" />
      </button>
      <button
        className="chatroom-nav-button6"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div35" />
        <b className="play-game-b5">Play Game</b>
      </button>
      <b className="play-game-b6">Play Game</b>
      <button className="profile-nav-button6">
        <div className="rectangle-div35" />
        <img className="profile-w-icon5" alt="" src="../profile-w1@2x.png" />
        <div className="profile-div6">Profile</div>
      </button>
      <button className="button4">
        <div className="rectangle-div39" />
        <div className="log-in-div6">Play game</div>
      </button>
      <div className="drool-rash-div1">Drool rash</div>
      <div className="logo-div7">
        <div className="baby-got-rash7">Bumpkin baby</div>
        <img className="group-icon7" alt="" src="../group7.svg" />
      </div>
      <div className="group-div3">
        <img className="cloud-icon2" alt="" src="../cloud2@2x.png" />
        <div className="i-got-a-drool-rash-when-the-te">{`I got a drool rash when the teething process began. It is caused around the mouth and cheeks as a result of too much saliva causing wet skin. Gently wash the afflicted areas with warm water, then pat dry. Don’t rub, which can cause irritation to already sensitive skin. use a gentle lotion if necessary. `}</div>
        <img className="boy-icon1" alt="" src="../boy1@2x.png" />
      </div>
      <div className="diagnosis-div7">Diagnosis</div>
      <div className="diagnosis-div7">Diagnosis</div>
      <img className="game-w-icon5" alt="" src="../game-w@2x.png" />
      <img className="game-w-icon5" alt="" src="../game-w@2x.png" />
    </div>
  );
};

export default DroolRash;
