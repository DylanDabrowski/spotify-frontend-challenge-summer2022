import React, { useState, useEffect } from "react";
import "./Card.css";
import LikeBtn from "../LikeBtn/LikeBtn.js";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Card({ title, date, imgsrc }) {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
  };

  return (
    <div className="card">
      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <p className="card__date">{date}</p>
        <img src={imgsrc} alt="img" className="card__image" />
        <span className="card__likebtn">
          {liked === false ? <AiOutlineHeart /> : <AiFillHeart />}
        </span>
      </div>
    </div>
  );
}
