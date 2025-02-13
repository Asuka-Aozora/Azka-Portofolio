import { Link } from "react-router-dom";
import {
  AvatarPNG,
  SkillGithub,
  Email,
  Instagram,
  Linkedin,
} from "../../assets/image";
import { FaEnvelope, FaLink, FaLocationDot, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={AvatarPNG} alt="avatar" className="avatar " />
              <h1 className="header-name text-white">
                Azka Musthafa Hafiz, <br /> Frontend Web Developer
              </h1>
            </div>
            <p className="header-text text text-white">
              As a web frontend, I am very enthusiastic about exploring this
              field. I really like creating displays, and databases for a
              website using the skills or stack that I have. I hope I can
              contribute to clients and industries that will work with me.
            </p>
          </div>

          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email: <span className="text">azdin1411@gmail.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Phone: <span className="text">+62 82385867751</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Address:{" "}
                  <span className="text">Kab Karimun Kepri, Indonesia</span>
                </p>
              </li>
              {/* <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLink size={15} />
                </span>
                <p className="info-item-text">
                  Website:{" "}
                  <span className="text">
                    https://awilson456.github.io/portfolio.html
                  </span>
                </p>
              </li> */}
            </ul>
            <ul className="contact-social-list flex items-center">
              <li className="social-item">
                <a href="https://github.com/Asuka-Aozora" target="_blank">
                  <img src={SkillGithub} />
                  <span className="tooltip text">Github</span>
                </a>
              </li>
              <li className="social-item">
                <a
                  href="https://www.linkedin.com/in/azka-musthafa-hafiz-4a6892321/"
                  target="_blank"
                >
                  <img src={Linkedin} />
                  <span className="tooltip text">Linkedin</span>
                </a>
              </li>
              <li className="social-item">
                <Link to="/">
                  <img src={Email} />
                  <span className="tooltip text">Email</span>
                </Link>
              </li>
              <li className="social-item">
                <a
                  href="https://www.instagram.com/azka_aozora/"
                  target="_blank"
                >
                  <img src={Instagram} />
                  <span className="tooltip text">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
