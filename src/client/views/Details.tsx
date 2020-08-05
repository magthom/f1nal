import * as React from "react";
import { ICharity } from '../UTILS/types';
import { match } from 'react-router-dom'
import Navbar from './Navbar';

class Details extends React.Component<DetailsProps, { org: any }> {
  id: any;
  constructor(props, { match }) {
    super(props, { match });
    this.id = props.match.params;
    this.state = { org: {} };
  }

  async componentDidMount() {
    let res = await fetch(`/api/charities/${this.id}`);
    let org = await res.json();
    this.setState({ org: org });
  }

  render() {
    return (
      <>
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="CSS/style1.css" rel="stylesheet" type="text/css" media="screen" />
          <title>Document</title>
          <Navbar />
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
          <div className="wrapper2">
            <div className="content2">
              <div className="main" style={{ width: '650px', height: '0px' }}>
                <h1 className="charityName">Charity Name</h1>
                <div className="missionTitle">
                  <button>Donate to this charity</button>
                  <h3>Mission</h3>
                </div>
                <p style={{ height: '523px' }}>Cursus sit amet dictum sit amet justo donec. Semper risus in hendrerit gravida. Nullam non nisi est sit amet facilisis magna etiam tempor. Proin fermentum leo vel orci porta non pulvinar. Velit dignissim sodales ut eu sem integer vitae. Tellus id interdum velit laoreet. Dolor sit amet consectetur adipiscing elit ut aliquam. Turpis massa sed elementum tempus egestas. Leo a diam sollicitudin tempor id. Volutpat commodo sed egestas egestas fringilla phasellus.</p>
              </div>
              <div className="contact" style={{ width: '200px', height: '832px' }}>
                <h3 style={{ height: '61px' }}>Charity Contact Info</h3>
                <form className="auto-style5" style={{ width: '200px', height: '70px', fontSize: 'medium' }}>
                  Address:
				</form>
                <form className="auto-style5" style={{ width: '200px', height: '70px', fontSize: 'medium' }}>
                  Telephone Number:</form>
                <form className="auto-style5" style={{ width: '200px', height: '70px', fontSize: 'medium' }}>
                  Fax:
				</form>
                <form className="auto-style5" style={{ width: '200px', height: '70px', fontSize: 'medium' }}>
                  EIN:
				</form>
                <form className="auto-style5" style={{ width: '200px', height: '70px', fontSize: 'medium' }}>
                  Website:
				</form>
                <div className="rating">
                  <h3>Rating</h3>
                  <p>Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

interface DetailsProps {
  org?: ICharity
}

export default Details;
