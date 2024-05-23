import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const branchLoc =
    "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=jmi,radour+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
  return (
    <>
      <div className="footer">
        <div className="fbox">
          <div className="aboutus">
            <h2>
              <span id="fdiff">A</span>bout us
            </h2>
            <p>
            A comprehensive travel site offering seamless booking for flights, hotels and activitesn and real-time updates. 
            </p>
          </div>
          <div className="branch">
            <h2>
              <span id="fdiff">B</span>ranch Location
            </h2>
            <iframe
    width="100%"
    height="200"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=jmi,radour+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  >
  </iframe>
          </div>
          <div className="quicklinks">
            <h2>
              <span id="fdiff">Q</span>uick Links
            </h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="follow">
            <h2>
              <span id="fdiff">F</span>ollow us
            </h2>
            <ul>
              <li>
                <Link to="/" id="instagram">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="facebook">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copy">
          <h2>
            Copyright &copy; <span id="fdiff">T</span>ouristatrack  2023-24 | All
            Rights Reserved
          </h2>
        </div>
      </div>
    </>
  );
};
