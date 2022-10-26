import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
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

  const onLogoutButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="profile-div3">
      <div className="line-div3" />
      <button className="home-nav-button3" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div20" />
        <img className="vector-icon2" alt="" src="../vector.svg" />
        <div className="home-div2">Home</div>
      </button>
      <button className="scanner-nav-button3" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div20" />
        <div className="diagnosis-div3">Diagnosis</div>
        <img className="scan-w-icon2" alt="" src="../scan-w1@2x.png" />
      </button>
      <button
        className="chatroom-nav-button3"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div20" />
        <b className="play-game-b2">Play Game</b>
      </button>
      <button className="profile-nav-button3">
        <div className="rectangle-div20" />
        <img className="profile-b-icon" alt="" src="../profile-b@2x.png" />
        <b className="profile-b">Profile</b>
      </button>
      <img className="ellipse-icon" alt="" src="../ellipse-13@2x.png" />
      <button className="edit-porfile-button">
        <div className="edit-btn-div" />
        <div className="edit-profile-div">Edit Profile</div>
        <img className="editpen-icon" alt="" src="../editpen@2x.png" />
      </button>
      <button className="account-settings-button">
        <div className="edit-btn-div" />
        <img className="editpen-icon" alt="" src="../set-img@2x.png" />
        <div className="edit-profile-div">Account Settings</div>
      </button>
      <button className="logout-button" onClick={onLogoutButtonClick}>
        <div className="edit-btn-div" />
        <div className="log-out-div">Log out</div>
        <img className="editpen-icon" alt="" src="../logout-img@2x.png" />
      </button>
      <button className="help-button">
        <div className="edit-btn-div" />
        <div className="help-div">Help</div>
        <img className="help-img-icon" alt="" src="../help-img@2x.png" />
      </button>
      <button className="about-button">
        <div className="help-div1">
          <div className="edit-btn-div" />
        </div>
        <div className="about-div">About</div>
        <img className="about-img-icon" alt="" src="../about-img@2x.png" />
      </button>
      <div className="steve-div">Steve</div>
      <div className="logo-div4">
        <div className="baby-got-rash4">Bumpkin baby</div>
        <img className="group-icon4" alt="" src="../group4.svg" />
      </div>
      <img className="game-w-icon2" alt="" src="../game-w@2x.png" />
    </div>
  );
};

export default Profile;
