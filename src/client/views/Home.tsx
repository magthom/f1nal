import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../scss/home.scss';

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
          <div className="banner">
            &nbsp;</div>
            <div className="outsideBorder">
            <div className="content">
              <video autoPlay muted loop className="auto-style4" style={{ width: '100%' }}>
                <source src="./assests/videos/sitevideo.mp4" />
              </video><div className="subbanner">
                <h1>Support charities in Birmingham, Alabama</h1>
               
                <p className="homeParagraph1">There are so many ways you can get involved with charities in the Birmingham area. You should start by looking into what type of charity you would like to support.  Once you have decided what you would like to focus on then you will need to decide how you would like to support them. There is no one way to help a local charity; you can donate money, time, or supplies to the charity of your choosing. The last step is to get in touch with the charity you wish to support and figure out what they need and make a plan with them. </p>
                
                <h1>Covid-19: How to help</h1>
               
                <p className="homeParagraph2">As we watch the Coronavirus Pandemic play out on a global scale, it’s easy to feel helpless. But no matter who you are or what your situation, you can make a difference. Even if you’re quarantined at home, there are still many ways to get involved and give back, including donating money or supplies, volunteering virtually, and checking in on people who might need support.
There is always something you can do to help others.  And by helping others you will also help yourself.  Research shows that volunteering makes you happier and healthier. Especially now with most of us isolated from others or confined to interacting with only those in our household it’s a great way to reinforce your community ties and remind you that we’re all working towards a common goal.  Finding ways to give back during COVID-19 will help lower your own anxiety and stress, boost your mood, and give you a sense of purpose during this difficult time. </p>
                {/* Cards */}
                <div className="cards">
                  <div className="cardOne">
                    
                    <div className="cardContainer1">
                    <img src="./assests/Bhamstrong.jpg" alt="" width="370px" height="150px" />
                      <h2>Birmingham Strong Emergency Loan Fund</h2>
                      <p className="bhamStrongPara">An emergency loan fund to provide zero-interest, 180-day loans to small businesses (less than 50 employees) of no more than $25,000 (with an average loan size of $10,000) to (a) prevent staff reductions; (b) offset losses related to the Coronavirus; and (c) help companies sponsor sick pay for workers.</p>
                      <div className="learnMore">
                        <p>Learn more</p>
                      </div>
                    </div>
                  </div>
                  <div className="cardTwo">
  
                     <div className="cardContainer2">
                     <img src="./assests/jcdh.png" alt="" width="370px" height="150px" />
                      <h2>Jefferson County Department of Health</h2>
                      <p className="jcdhPara">The JCDH is collecting these PPE (personal protection equipment) items:
                      N95 masks, surgical masks, isolation gowns, gloves, face shields, sterile
                      specimen collection swabs, hand sanitizer, and home-made face masks and
          gowns. </p>
                      <div className="learnMore2">
                        <p>Learn more</p>
                      </div>
                    </div>
                  </div>
                  <div className="cardThree">
                   
                    <div className="cardContainer3">
                    <img src="./assests/UAB.jpg" alt="" width="370px" height="150px" />
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
          </div>
         
      </>
    );
  }
}

export interface HomeProps {
}

export default Home;
