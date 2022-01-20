import React, { useState, useEffect } from "react";
import "./ImageCards.css";
import Card from "../Card/Card.js";

export default function ImageCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?count=20&api_key=lwtGe8ifpAENLITuYZ0b1gqxkdhZux9u2OdvlfB4",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="imgcards">
      <div className="imgcards__container">
        {data.map((item) => (
          <Card title={item.title} date={item.date} imgsrc={item.url} />
        ))}
      </div>
    </div>
  );
}
