import * as React from "react";
import { ICharity } from "../UTILS/types";
import { match } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../scss/details.scss";

class Details extends React.Component<DetailsProps, { org: any }> {
  id: any;
  constructor(props) {
    super(props);
    this.state = { org: {} };
  }

  newMission() {
    let newNewArr = [];
    let arr = this.state.org.mission.split(/[ ,.]+/);
    let newArr = arr.filter((word) => !word.includes("<br>"));
    newNewArr.push(newArr);
    let mission = newNewArr.toString();
    console.log(mission.replace(',', ' '));
  }
  async componentDidMount() {
    try {
      let r = await fetch(`/api/charities/${this.props.match.params.id}`);
      let org = await r.json();
      this.setState({ org: org });
      this.newMission()
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (

      <>
      <div>
        
        <div className="detailsContainer">
          
          <div className="detailsBorder">
            <div className="banner">
            </div>



            <div className="missionContainer">
              <h1 className="charity_name">{this.state.org.charity_name}</h1>
              <h2 className="tagline"> {this.state.org.tagline} </h2>
              <div className="missionBox">
                <p className="missionStatement">{this.state.org.mission}</p>
              </div>
              <div className="missionBackground"></div>
              <div className="donateBackground"> <button className="btn"><a href={this.state.org.websiteURL}> Donate</a></button></div>
              <div className="addressBackground"></div>
              <div className="einBackground"></div>
              <div className="websiteBackground"></div>
              <div className="ratingBackground"></div>
              <div className="contactBackground"></div>
              <span className="contactInformation">Contact Information</span>
              <span className="mission">Mission</span>

              <div className="contactBox"></div>
              <form className="address">Address: {this.state.org.city} {" AL, "} {this.state.org.streetAddress1} {", "} {this.state.org.postal_code}

              </form>
              <form className="ein">EIN: {this.state.org.EIN}</form>
              <form className="website">Website: {this.state.org.websiteURL}</form>
              <form className="rating">Rating: {this.state.org.rating}</form>
            </div>




          </div>
        </div>
        </div>
      </>
    );
  }
}

interface DetailsProps {
  org?: ICharity;
}
export default Details;



























