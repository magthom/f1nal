import * as React from "react";
import { ICharity } from "../UTILS/types";
import { match } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

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
      <div>
        <Navbar />
        <div className="banner">
        </div>
        <div id="wrapper">
          <div id="content">
            <div className="main">
              <h1 id="charity_name">{this.state.org.charity_name}</h1>
              <div className="mission">
                <button>Donate to this charity</button>
                <h3>Mission</h3>
                <p>{this.state.org.mission}</p>
              </div>
            </div>
            <div id="contact">
              <h3>Charity Contact Info</h3>
              <form
                id="address"
              >
                Address:
              </form>
              <form
                id="phone"
              >
                Phone:
              </form>
              <form
                id="fax"
              >
                Fax:
              </form>
              <form
                id="ein">
                EIN:
              </form>
              <form
                id="website">
                Website:
              </form>
              <div id="rating">
                <h3>Rating</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface DetailsProps {
  org?: ICharity;
}
export default Details;
