import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../scss/about.scss';

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
          
          

          <div className="aboutWrapper">
          <div className="aboutBorder">
            <div className="aboutContent">
              <img src="./assests/City_chaston.jpg" alt="City" width={1300} height={400} />
              <div className="subbanner">
              <div className="emailList">
              <h1>Contact Us</h1>
                <ul>
                  <li>
                    Quinn email
                  </li>
                  <li>
                    Chaston email
                  </li>
                  <li>
                    John email
                  </li>
                  <li>
                    Shashawndra email
                  </li>
                  <li>
                    Maggie email
                  </li>
                </ul>
                </div>
                <h1 className="aboutHeader">About Us</h1>
               
                <p className="aboutPara">Our app is here to help people connect with charities in their community to help support and better those that need a little assistance in times of need. We want to make it easier for people to find their way to help in the simplest and most convenient way possible. This app will allow people to donate directly and correspond with the charities of their choice. Since there is no one way to help we make it easy for people to find their way to help and give back to their community. </p>
                
              </div>
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
