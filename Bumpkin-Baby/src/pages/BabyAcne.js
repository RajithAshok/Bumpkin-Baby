import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BabyAcne.css";

const BabyAcne = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/scanner");
  }, [navigate]);

  const onChatroomNavButtonClick = useCallback(() => {
    navigate("/chatroom");
  }, [navigate]);

  const onProfileNavButtonClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="baby-acne-div">
      <div className="line-div4" />
      <button className="home-nav-button4" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div24" />
        <img className="vector-icon3" alt="" src="../vector.svg" />
        <div className="home-div3">Home</div>
      </button>
      <button className="scanner-nav-button4">
        <button className="rectangle-button" onClick={onRectangleButtonClick} />
        <img className="scan-w-icon3" alt="" src="../scan-w1@2x.png" />
      </button>
      <button
        className="chatroom-nav-button4"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div24" />
      </button>
      <button className="profile-nav-button4" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div24" />
        <img className="profile-w-icon3" alt="" src="../profile-w1@2x.png" />
        <div className="profile-div4">Profile</div>
      </button>
      <div className="baby-acne-div1">Baby acne</div>
      <div className="group-div">
        <img className="boy-icon" alt="" src="../boy@2x.png" />
        <img className="cloud-icon" alt="" src="../cloud@2x.png" />
      </div>
      <button className="button2">
        <div className="rectangle-div27" />
        <div className="log-in-div4">Play game</div>
      </button>
      <div className="logo-div5">
        <div className="baby-got-rash5">Bumpkin baby</div>
        <img className="group-icon5" alt="" src="../group5.svg" />
      </div>
      <div className="group-div">
        <img className="boy-icon" alt="" src="../boy@2x.png" />
        <img className="cloud-icon" alt="" src="../cloud@2x.png" />
      </div>
      <div className="rectangle-div28" />
      <div className="my-sister-had-got-this-rash-so">
        My sister had got this rash soon after she was born. Although the cause
        is unknown, it usually subsides within 3 - 4 months. to help with the
        treatment you can wash the face with a gentle soap. avoid scrubbing hard
        and the usuage of lotions or oily face products.
      </div>
      <div className="diagnosis-div4">Diagnosis</div>
      <b className="play-game-b3">Play Game</b>
      <img className="game-w-icon3" alt="" src="../game-w@2x.png" />
    </div>
  );
};

export default BabyAcne;
