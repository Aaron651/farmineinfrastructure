import "./TopBar.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="topbar">
      <div className="social">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaYoutube />
      </div>

      <div className="phone">
        +91 8520823389
      </div>
    </div>
  );
}

export default TopBar;