import * as React from "react";
import "../scss/style.scss";

class Home extends React.Component<IHomeProps> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div id="wrapper">
          <div id="top">
            <div id="logo">
              <img src={("/assets/Helping-Hands.jpg")} alt="Helping Hands logo" />
              <img height="110" src="/assets/Rectangle%204.jpg" width="148" />
            </div>
            <div id="social-media">
              <p>Login</p>
              <p>Register</p>
              <p>Donate</p>

              <ul>
                <li id="test-img">
                {/* <li><img src="/assets/twitter-squared.png" height="40" width="40"/></li> */}
                </li>
              </ul>
            </div>
          </div>
          <div id="topnav">
            <ul>
              <li>
                <a href="index.html" className="auto-style2">
                  Home
                </a>
              </li>
              <li>
                <span className="auto-style2">&nbsp;&nbsp;&nbsp; </span>
                <a href="charities.aspx" className="auto-style2">
                  Charities
                </a>
                &nbsp;&nbsp;{" "}
              </li>
              <li>
                &nbsp;{" "}
                <a href="About.html" className="auto-style2">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div id="banner">&nbsp;</div>
          <video
            autoPlay={true}
            muted={false}
            loop={false}
            className="auto-style4"
          >
            <source src="http://player.vimeo.com/external/332226316.hd.mp4?s=7842fb4a1cd3d6e8d8df6333bb74fd9381c06b54&amp;profile_id=175&amp;oauth2_token_id=1279896596" />
          </video>
          <div id="subbanner">
            <h2>Support charities in Birmingham, Alabama</h2>
            <p>&nbsp;</p>
            <p className="auto-style2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
            <p className="auto-style2">&nbsp;</p>
            <p className="auto-style2">
              <strong>Covid 19 Sites</strong>
            </p>
            <p className="auto-style2">&nbsp;</p>
            <p className="auto-style2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
          </div>

          <div id="leftnav"></div>
          <div id="content"></div>
          <div id="rightside"></div>
          <div id="footer"></div>
        </div>
      </>
    );
  }
}

export interface IHomeProps {
  styles: string;
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 3ce01ba2e2b4a10491e9b7019dfc6b8db7d357bd
