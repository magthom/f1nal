import * as React from "react";
import { ICharity } from "../UTILS/types";
import { match } from "react-router";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

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
      <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Helping Hands</title>
          <Navbar />
          <div className="banner" style={{ height: '1px' }}>
            &nbsp;</div>
          <div className="wrapper2">
            <div className="content2">
              <div className="main" style={{ width: '650px', height: '0px' }}>
                <h1 className="charity-name">{this.state.org.charity_name}</h1>
                <div className="mission">
                  <button>Donate to this charity</button>
                  <h3>Mission</h3>
                <p style={{ height: '300px' }}>{this.state.org.mission}</p>
                </div>
              </div>
              <div className="contact" style={{ width: '200px' }}>
                <h3>Charity Contact Info</h3>
                <form className="auto-style5" style={{ width: '200px', height: '70px', fontSize: 'medium' }}>
                  Address:
				</form>
                <form className="auto-style5" style={{ width: '200px', height: '70px', fontSize: 'medium' }}>
                  Telephone Number:</form>
                <form className="auto-style5" style={{ width: '200px', height: '70px', fontSize: 'medium' }}>
                  Fax:
				</form>
                <form className="auto-style5" style={{ width: '200px', height: '70px', fontSize: 'medium' }}>
                  EIN:
				</form>
                <form className="auto-style5" style={{ width: '200px', height: '70px', fontSize: 'medium' }}>
                  Website:
				</form>
                <div className="rating">
                  <h3>Rating</h3>
                  <p>Content</p>
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
