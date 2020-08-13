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
         



          <div className="aboutWrapper">
            <div className="aboutBorder">
              <div className="aboutContent">
                <img src="./assests/City_chaston.jpg" alt="City" width={1304} height={400} />
                <div className="subbanner">
                  <div className="mainSection">

                    <h1 className="aboutHeader">About</h1>

                    <p className="aboutPara">Our app is here to help people connect with charities in their community to help support and better those that need a little assistance in times of need. We want to make it easier for people to find their way to help in the simplest and most convenient way possible. This app will allow people to donate directly and correspond with the charities of their choice. Since there is no one way to help we make it easy for people to find their way to help and give back to their community. </p>
                  </div>
                  <div className="quinn">
                    <img src="./assests/Quinn.jpg" alt="" width={200} height={200}/>
                    <h1>Quinn Wardy</h1>
                    <div className="quinnList">
                      <ul>
                      
                        <li className="quinnEmail">Email: quinnwardy@gmail.com</li>
                        <li className="quinnLinkd">LinkedIn: https://www.linkedin.com/in/quinn-wardy/</li>
                      </ul>
                      </div>
                  </div>
                  <div className="maggie">
                  <img src="./assests/Maggie.jpg" alt="" width={200} height={200}/>
                  <h1>Maggie Thompson</h1>
                      <ul className="maggieList">
                        
                        <li>Email:thompson.maggie.e@gmail.com </li>
                        <li>LinkedIn:https://www.linkedin.com/in/maggieethompson/</li>
                      </ul>
                  </div>
                  <div className="shashawndra">
                  <img src="./assests/shashawndra.jpg" alt="" width={200} height={200}/>
                  <h1>Shashawndra Collins</h1>
                      <ul>
                      
                        <li>Email: Joythe1st@AOL.com</li>
                        
                      </ul>
                  </div>
                  <div className="harrison">
                  <img src="./assests/harrison.jpg" alt="" width={200} height={200}/>
                  <h1>Harrison Allinder</h1>
                      <ul>
                        
                        <li>Email: Harrison.allinder@icloud.com</li>
                        
                      </ul>
                  </div>
                  <div className="chaston">
                  <img src="./assests/chaston.jpg" alt="" width={200} height={200}/>
                  <h1>Chaston Harper</h1>
                      <ul>
                        
                        <li>Email: Chastonharper1@gmail.com</li>
                        
                      </ul>
                  </div>
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
