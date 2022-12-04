import React from "react";
import "./footer.css";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <a href="#top" className="footer_logo">
        JOBS
      </a>
      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testmonials">Testmonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://twitter.com/yohanes.de">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/yohanes-derese-008b22246/">
          <BsLinkedin />
        </a>
        <a href="https://instagram.com/yohanes.de">
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Yohanes Derese. All Rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
