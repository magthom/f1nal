import * as React from "react";
import { ICharity } from "../UTILS/types";
import { match } from "react-router";
import { Link } from "react-router-dom";

class Details extends React.Component<DetailsProps, { org: any }> {
  id: any;
  constructor(props) {
    super(props);
    this.state = { org: {} };
  }
  async componentDidMount() {
    try {
      let r = await fetch(`/api/charities/${this.props.match.params.id}`);
      let org = await r.json();
      this.setState({ org: org });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <main className="cardContainer">
        <h1 className="text-primary text-center"></h1>
        <ul className="list-group">
          <h2>{this.state.org.charity_name}</h2>
          <p>Category: {this.state.org.category_name}</p>
          <p>Location: {this.state.org.city}</p>
          <p>Mission: {this.state.org.mission}</p>
        </ul>
      </main>
    );
  }
}
interface DetailsProps {
  org?: ICharity;
}
export default Details;
