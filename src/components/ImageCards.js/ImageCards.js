import React from "react";
import "./ImageCards.css";

function populateList(items) {
  items.forEach((item) => addItem(item));
}

function addItem(item) {
  const card = document.createElement("div");
  card.className = "imgcards__card";

  const cardContent = document.createElement("div");
  cardContent.className = "imgcards__card-content";

  const title = document.createElement("h1");
  title.className = "imgcards__title";

  const date = document.createElement("p");
  date.className = "imgcards__date";
  date.innerHTML = item.date;

  const image = document.createElement("img");
  image.className = "imgcards__image";
  image.src = item.hdurl;

  cardContent.appendChild(title);
  cardContent.appendChild(date);
  cardContent.appendChild(image);

  card.appendChild(cardContent);

  document.getElementById("imgcards__cards-container").appendChild(card);
}

export default class ImageCards extends React.Component {
  async componentDidMount() {
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
      .then((data) => populateList(data));
  }

  render() {
    return (
      <div className="imgcards">
        <div
          className="imgcards__cards-container"
          id="imgcards__cards-container"
        ></div>
      </div>
    );
  }
}
