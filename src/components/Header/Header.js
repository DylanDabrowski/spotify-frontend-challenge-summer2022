import React from "react";
import { GiStarSwirl } from "react-icons/gi";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <GiStarSwirl className="header__icon" />
        <h1 className="header__title">Nebulabook</h1>
      </div>
    </div>
  );
};

export default Header;
