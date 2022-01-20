import React from "react";
import "./Card.css";
import LikeBtn from "../LikeBtn/LikeBtn.js";

const Card = ({ title, date, imgsrc }) => {
  return (
    <div className="card">
      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <p className="card__date">{date}</p>
        <img src={imgsrc} alt="img" className="card__image" />
        <span className="card__likebtn">{/* <LikeBtn /> */}</span>
      </div>
    </div>
  );
};

export default Card;
