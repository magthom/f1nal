import * as React from "react";
import { ICharity } from "../UTILS/types";
import { match } from "react-router";

class Details extends React.Component<DetailsProps, { org: any }> {
  id: any;
  constructor(props) {
    super(props);
    this.state = { org: {} };
  }

  async componentDidMount() {

    try {
      let res = await fetch(`/api/charities/${this.props.match.params.id}`);
      let org = await res.json();
      this.setState({ org: org });
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
