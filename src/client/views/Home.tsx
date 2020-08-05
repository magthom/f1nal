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
          {/* <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n.auto-style2 {\n\tfont-size: large;\n}\n\t.auto-style4 {\n\t\tmargin-right: 0px;\n\t\tmargin-top: 0px;\n\t\tmargin-left: 0px;\n\t}\n\t.auto-style5 {\n\t\tmargin-top: 0;\n\t}\n\t.auto-style6 {\n\t\tmargin-bottom: 64px;\n\t}\n\t" }} /> */}
          <Navbar />
          <div className="banner" style={{ height: '1px' }}>
            &nbsp;</div>
      
            <div className="content">
              <video autoPlay muted loop className="auto-style4" style={{ width: '100%' }}>
                <source src="http://player.vimeo.com/external/332226316.hd.mp4?s=7842fb4a1cd3d6e8d8df6333bb74fd9381c06b54&profile_id=175&oauth2_token_id=1279896596" />
              </video><div className="subbanner">
                <h2>Support charities in Birmingham, Alabama</h2>
                <p>&nbsp;</p>
                <p className="auto-style2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                <p className="auto-style2">&nbsp;</p>
                <h2>How to help during the Covid 19 pandemic</h2>
                <p className="auto-style2">&nbsp;</p>
                <p className="auto-style2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                {/* Cards */}
                <div className="cards">
                  <div className="cardOne">
                    <img src="./assests/Bhamstrong.jpg" alt="" width="370px" height="150px" />
                    <div className="cardContainer">
                      <h2>Birmingham Strong Emergency Loan Fund</h2>
                      <p>An emergency loan fund to provide zero-interest, 180-day loans to small businesses (less than 50 employees) of no more than $25,000 (with an average loan size of $10,000) to (a) prevent staff reductions; (b) offset losses related to the Coronavirus; and (c) help companies sponsor sick pay for workers.</p>
                      <div className="learnMore">
                        <p>Learn more</p>
                      </div>
                    </div>
                  </div>
                  <div className="cardTwo">
                    <img src="./assests/jcdh.png" alt="" width="370px" height="150px" />
                    <div className="cardContainer">
                      <h2>Jefferson County Department of Health</h2>
                      <p>The JCDH is collecting these PPE (personal protection equipment) items:
                      N95 masks, surgical masks, isolation gowns, gloves, face shields, sterile
                      specimen collection swabs, hand sanitizer, and home-made face masks and
          gowns. </p>
                      <div className="learnMore2">
                        <p>Learn more</p>
                      </div>
                    </div>
                  </div>
                  <div className="cardThree">
                    <img src="./assests/UAB.jpg" alt="" width="370px" height="150px" />
                    <div className="cardContainer">
                      <h2>UAB</h2>
                      <p>As cases of COVID-19 in Alabama increase, the state’s largest hospital, UAB, needs your help. There is an urgent need for more PPE (personal protection equipment). This includes:
                      Face masks (including n95 respirator masks)
                      Eye and face guards
                      Surgical and isolation gowns
          Protective gloves</p>
                      <div className="learnMore3">
                        <p>Learn more</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cards */}
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