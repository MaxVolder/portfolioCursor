import "./style.css";

import fb from "./../../img/icons/fb.png";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
    return ( 
<footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="https://www.facebook.com/profile.php?id=100002068586567" target="_blank" rel="noopener noreferrer">
                  <img src={fb} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.instagram.com/max_volder/" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://github.com/MaxVolder" target="_blank" rel="noopener noreferrer">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="http://www.linkedin.com/in/володя-максимів-109376246" target="_blank" rel="noopener noreferrer">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 github.com/MaxVolder</p>
            </div>
          </div>
        </div>
      </footer>
     )
}
 
export default Footer;