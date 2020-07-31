import * as React from "react";
import { ICharity } from "../UTILS/types";

class Details extends React.Component<DetailsProps, { org: any }> {
  id: any;
  constructor(props, { match }) {
    super(props, { match });
    this.id = props.match.params.id;
    this.state = { org: {} };
  }

  async componentDidMount() {
    let res = await fetch(`/api/charities/get/${this.id}`);
    let org = await res.json();
    this.setState({ org: org });
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
  org: ICharity;
}

export default Details;
