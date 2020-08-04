import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Home extends React.Component<HomeProps> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div>
          <title>Document</title>
          <Navbar />
          <link href="CSS/style1.css" rel="stylesheet" type="text/css" media="screen" />
          <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n.auto-style2 {\n\tfont-size: large;\n}\n\t.auto-style4 {\n\t\tmargin-right: 0px;\n\t\tmargin-top: 0px;\n\t\tmargin-left: 0px;\n\t}\n\t.auto-style5 {\n\t\tmargin-top: 0;\n\t}\n\t.auto-style6 {\n\t\tmargin-bottom: 64px;\n\t}\n\t" }} />
          <div className="top">
            <div className="logo">
              <img src="./assests/darklogo.jpg" alt="Helping Hands Logo" width={300} className="auto-style5" height={70} />
            </div>
            <div className="social-media">
              <p>Login</p>
              <p>Register</p>
              <p>Donate</p>
            </div>
            <div className="favIcons" style={{ width: '69px' }}>
              <div className="fbIcon">
                <img src="./assests/Icons/124010.png" height={24} width={24} />
              </div>
              <div className="twitterIcon">
                <img src="./assests/twitter.png" height={24} width={24} />
              </div>
            </div>
          </div>
          <div className="topnav">
            <ul>
              <li><a href="index.html" className="auto-style2">Home</a></li>
              <li><span className="auto-style2">&nbsp;&nbsp;&nbsp; </span>
              </li><li><a href="charityDirectory.html" className="auto-style2">Charities</a>&nbsp;&nbsp; </li>
              <li>&nbsp; <a href="about.html" className="auto-style2">About</a></li>
              <input type="text" placeholder="Search for charities.." />
            </ul>
          </div>
          <div className="banner" style={{ height: '1px' }}>
            &nbsp;</div>
          <div className="wrapper">
            <div className="content">
              <img src="./assests/City.jpg" alt="City" width={1300} height={400} />
              <div className="subbanner">
                <h1 className="aboutHeader">About Us</h1>
                <p>&nbsp;</p>
                <p className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export interface HomeProps {
}

export default Home;
