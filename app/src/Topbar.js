import React from "react";
import "./Topbar.css";

export default function Topbar(props) {
  return (
    <div className="TopBarContainer">
      <p className="TitleLink">Made with 💛</p>
      <p className="Wechat">微信: yucun_li</p>
      <a href="https://www.linkedin.com/in/liyucun/" className="LinkedInLink">
        LinkedIn
      </a>
    </div>
  );
}