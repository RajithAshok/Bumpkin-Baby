import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="log-in-div">
      <div className="rectangle-div" />
      <button className="click-here-button">Click here</button>
      <div className="dont-have-an-account">Don’t have an account?</div>
      <img className="rectangle-icon" alt="" src="../rectangle@2x.png" />
      <div className="log-in-div1">Log in</div>
      <input
        className="component-input"
        type="text"
        placeholder="Username"
        minLength={5}
        required
      />
      <input
        className="component-input1"
        type="password"
        placeholder="Password"
        minLength={10}
        required
      />
      <button className="button" onClick={onButtonClick}>
        <div className="rectangle-div1" />
        <div className="log-in-div2">Log in</div>
      </button>
      <div className="logo-div">
        <div className="baby-got-rash">Bumpkin baby</div>
        <img className="group-icon" alt="" src="../group.svg" />
      </div>
    </div>
  );
};

export default LogIn;
