import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LogIn from "./pages/LogIn";
import Homepage from "./pages/Homepage";
import Scanner from "./pages/Scanner";
import Playgame from "./pages/Playgame";
import Profile from "./pages/Profile";
import BabyAcne from "./pages/BabyAcne";
import HeatRash from "./pages/HeatRash";
import DroolRash from "./pages/DroolRash";
import DiaperRash from "./pages/DiaperRash";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/scanner":
        title = "";
        metaDescription = "";
        break;
      case "/chatroom":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/baby-acne":
        title = "";
        metaDescription = "";
        break;
      case "/heat-rash":
        title = "";
        metaDescription = "";
        break;
      case "/drool-rash":
        title = "";
        metaDescription = "";
        break;
      case "/diaper-rash":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />

      <Route path="/homepage" element={<Homepage />} />

      <Route path="/scanner" element={<Scanner />} />

      <Route path="/chatroom" element={<Playgame />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/baby-acne" element={<BabyAcne />} />

      <Route path="/heat-rash" element={<HeatRash />} />

      <Route path="/drool-rash" element={<DroolRash />} />

      <Route path="/diaper-rash" element={<DiaperRash />} />
    </Routes>
  );
}
export default App;
