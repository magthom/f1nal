import * as React from "react";
import { ICharity } from "../UTILS/types";
import { match } from "react-router";
import { networkInterfaces } from "os";

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
      let res = await fetch(`/api/charities/${this.props.match.params.id}`);
      let org = await res.json();
      this.setState({ org: org });
      this.newMission();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main className="container">
        <h1 className="text-primary text-center"></h1>
        <ul className="list-group">
          <h2>{this.state.org.charity_name}</h2>
          <p>
            {this.state.org.city}
            {" AL, "}
            {this.state.org.streetAddress1}
            {", "}
            {this.state.org.postal_code}
          </p>
          <h4>{this.state.org.tagline}</h4>
          <h4>{this.state.org.mission}</h4>
          <p>Category: {this.state.org.category_name}</p>
          <p>Cause: {this.state.org.cause_name}</p>
        </ul>
      </main>
    );
  }
}

interface DetailsProps {
  org?: ICharity;
}

export default Details;
