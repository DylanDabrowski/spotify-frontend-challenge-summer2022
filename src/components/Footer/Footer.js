import React from "react";
import "./Footer.css";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer__container">
        <div className="footer__col1">
          <a href="https://github.com/DylanDabrowski" className="footer__row">
            <AiFillGithub className="footer__icon" />
            <h1 className="footer__icon-text">Github</h1>
          </a>
          <a
            href="https://www.instagram.com/dylandabrowski/"
            className="footer__row"
          >
            <AiFillInstagram className="footer__icon" />
            <h1 className="footer__icon-text">Instagram</h1>
          </a>
        </div>
        <div className="footer__col2">
          <a
            href="https://www.facebook.com/dylandabrowski14/"
            className="footer__row"
          >
            <AiFillFacebook className="footer__icon" />
            <h1 className="footer__icon-text">Facebook</h1>
          </a>
          <a href="https://twitter.com/dylandabrowski_" className="footer__row">
            <AiFillTwitterCircle className="footer__icon" />
            <h1 className="footer__icon-text">Twitter</h1>
          </a>
        </div>
        <div className="footer__col3">
          <a
            href="https://www.linkedin.com/in/dylandabrowski/"
            className="footer__row"
          >
            <AiFillLinkedin className="footer__icon" />
            <h1 className="footer__icon-text">LinkedIn</h1>
          </a>
          <a href="mailto:dylandabrowski@gmail.com" className="footer__row">
            <AiFillMail className="footer__icon" />
            <h1 className="footer__icon-text">Email</h1>
          </a>
        </div>
      </div>
      <div className="footer__signoff">
        <h1 className="footer__signoff-text">Dylan Dabrowski</h1>
        <span role="img" aria-label="wave" className="footer__signoff-emoji">
          👋
        </span>
      </div>
    </div>
  );
};

export default Footer;
