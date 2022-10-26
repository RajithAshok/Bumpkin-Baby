import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/baby-acne");
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

  const onReadMoreClick = useCallback(() => {
    navigate("/baby-acne");
  }, [navigate]);

  const onReadMoreBtnButtonClick = useCallback(() => {
    navigate("/baby-acne");
  }, [navigate]);

  const onReadMoreBtnButton1Click = useCallback(() => {
    navigate("/baby-acne");
  }, [navigate]);

  const onReadMoreBtnButton2Click = useCallback(() => {
    navigate("/heat-rash");
  }, [navigate]);

  const onReadMoreBtnButton3Click = useCallback(() => {
    navigate("/drool-rash");
  }, [navigate]);

  const onReadMore5Click = useCallback(() => {
    navigate("/diaper-rash");
  }, [navigate]);

  const onReadMoreBtnButton4Click = useCallback(() => {
    navigate("/baby-acne");
  }, [navigate]);

  return (
    <div className="homepage-div">
      <div className="line-div" />
      <button className="home-nav-button" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div2" />
        <img className="home-b-icon" alt="" src="../home-b@2x.png" />
        <b className="home-b">Home</b>
      </button>
      <button className="scanner-nav-button" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div2" />
        <img className="scan-w-icon" alt="" src="../scan-w@2x.png" />
      </button>
      <button
        className="chatroom-nav-button"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div2" />
      </button>
      <button className="profile-nav-button" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div2" />
        <img className="profile-w-icon" alt="" src="../profile-w@2x.png" />
        <div className="profile-div">Profile</div>
      </button>
      <div className="frame-div">
        <div className="acne-card-div">
          <div className="card-background-div" />
          <button className="read-more" onClick={onReadMoreClick}>
            <span className="read-more1">{`Read More `}</span>
            <span className="span">🡢</span>
          </button>
          <div className="patricia-kemp-div">Patricia Kemp</div>
          <img className="avatar-icon" alt="" src="../avatar@2x.png" />
          <div className="heading-description">
            <div className="desc-div">
              Baby acne usually develops about 2 to 4 weeks after birth. Tiny
              red or white bumps appear on the baby’s cheeks, nose, and
              forehead. The cause is unknown. It typically clears up on its own
              in about 3 to 4 months without leaving marks.
            </div>
            <div className="title-div">Baby Acne</div>
          </div>
          <div className="points-div">10 pts</div>
          <div className="rash-div">RASH</div>
          <img className="rash-photo-icon" alt="" src="../rash-photo@2x.png" />
          <img
            className="icon-120px-social-media"
            alt=""
            src="../icon-120px--social-media.svg"
          />
        </div>
        <div className="heat-card-div">
          <div className="card-background-div1" />
          <button className="read-more-button">
            <span className="read-more1">{`Read More `}</span>
            <span className="span">🡢</span>
          </button>
          <div className="patricia-kemp-div1">Patricia Kemp</div>
          <img className="avatar-icon1" alt="" src="../avatar@2x.png" />
          <div className="heading-description1">
            <div className="desc-div">
              <p className="baby-heat-rash">
                Baby heat rash tends to happen when baby’s sweat glands become
                blocked and trap sweat under the skin, Crosby says. It’s usually
                seen in warm weather or when baby is overdressed. How do you
                know if the baby rash is caused by heat?
              </p>
              <p className="baby-heat-rash"></p>
            </div>
            <div className="title-div">Heat Rash</div>
          </div>
          <div className="points-div1">10 pts</div>
          <div className="rash-div">RASH</div>
          <img className="rash-photo-icon" alt="" src="../rash-photo1@2x.png" />
          <img
            className="icon-120px-social-media"
            alt=""
            src="../icon-120px--social-media1.svg"
          />
        </div>
        <div className="drooling-card-div">
          <div className="card-background-div2" />
          <button className="read-more-button1">
            <span className="read-more1">{`Read More `}</span>
            <span className="span">🡢</span>
          </button>
          <div className="patricia-kemp-div2">Patricia Kemp</div>
          <img className="avatar-icon2" alt="" src="../avatar2@2x.png" />
          <div className="heading-description2">
            <div className="desc-div">
              Drool rash and general facial rash is very common in babies.
              They’re developing salivary glands and teething, so it’s common
              for them to have drool on their face much of the time. Pacifier
              use, food particles, teeth growing in, and frequent face-wiping
              may also irritate the skin.
            </div>
            <div className="title-div">Drooling Rash</div>
          </div>
          <div className="points-div">10 pts</div>
          <div className="rash-div">RASH</div>
          <img className="rash-photo-icon" alt="" src="../rash-photo2@2x.png" />
          <img
            className="icon-120px-social-media"
            alt=""
            src="../icon-120px--social-media2.svg"
          />
        </div>
        <button
          className="readmorebtn-button"
          onClick={onReadMoreBtnButtonClick}
        >
          <div className="rectangle-div6" />
          <div className="read-more4">
            <span className="read-more1">{`Read More `}</span>
            <span className="span">🡢</span>
          </div>
        </button>
        <button
          className="readmorebtn-button"
          onClick={onReadMoreBtnButton1Click}
        >
          <div className="rectangle-div6" />
          <div className="read-more4">
            <span className="read-more1">{`Read More `}</span>
            <span className="span">🡢</span>
          </div>
        </button>
        <button
          className="readmorebtn-button2"
          onClick={onReadMoreBtnButton2Click}
        >
          <div className="rectangle-div6" />
          <div className="read-more4">
            <span className="read-more1">{`Read More `}</span>
            <span className="span">🡢</span>
          </div>
        </button>
        <button
          className="readmorebtn-button3"
          onClick={onReadMoreBtnButton3Click}
        >
          <div className="rectangle-div6" />
          <div className="read-more4">
            <span className="read-more1">{`Read More `}</span>
            <span className="span">🡢</span>
          </div>
        </button>
        <button
          className="readmorebtn-button4"
          onClick={onReadMoreBtnButton4Click}
        >
          <div className="diaper-card-div">
            <div className="card-background-div3" />
            <button className="read-more-button2">
              <span className="read-more1">{`Read More `}</span>
              <span className="span">🡢</span>
            </button>
            <div className="patricia-kemp-div3">Patricia Kemp</div>
            <img className="avatar-icon3" alt="" src="../avatar3@2x.png" />
            <div className="heading-description3">
              <div className="desc-div3">
                Diaper rashes are a common skin concern for infants and
                toddlers. They can cause red splotches and scales to appear in
                the genital area and on the child’s bottom. Diaper rashes are
                common because they grow in warm, moist places. That makes a
                diaper the perfect place for the rash to develop.
              </div>
              <div className="title-div3">Diaper Rash</div>
            </div>
            <div className="points-div3">10 pts</div>
            <div className="rash-div3">RASH</div>
            <img
              className="rash-photo-icon"
              alt=""
              src="../rash-photo3@2x.png"
            />
            <img className="icon-120px-social-media" alt="" />
          </div>
          <div className="rectangle-div10" />
          <button className="read-more13" onClick={onReadMore5Click}>
            <span className="read-more1">{`Read More `}</span>
            <span className="span">🡢</span>
          </button>
        </button>
      </div>
      <img className="game-w-icon" alt="" src="../game-w@2x.png" />
      <div className="logo-div1">
        <div className="baby-got-rash1">Bumpkin baby</div>
        <img className="group-icon1" alt="" src="../group1.svg" />
      </div>
      <div className="diagnosis-div">Diagnosis</div>
      <div className="play-game-div">Play Game</div>
    </div>
  );
};

export default Homepage;
