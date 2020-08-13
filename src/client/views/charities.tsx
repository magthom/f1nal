import * as React from "react";
import { ICharity } from "../UTILS/types";
import OrgCard from "../components/OrgCard";
import Navbar from "./Navbar";
import "../scss/charities.scss";

class Charities extends React.Component<IcharityProps, IcharityState> {
  constructor(props: IcharityProps) {
    super(props);
    this.state = {
      charities: [],
      filteredCharities: [],
      searchFilteredCharities: [],
      filtered: false,
      searchFiltered: false,
      search: "",
    };
  }

  async componentDidMount() {
    try {
      let r = await fetch("/api/charities");
      let charities = await r.json();
      this.setState({ charities });
    } catch (error) {
      console.log(error);
    }
  }




  searchFilteredResults(e) {
    this.setState({ search: e.target.value.substr(0, 20) }, () => {
      if (this.state.search == "") {
        this.setState({ searchFiltered: false })
      } else if (this.state.search !== "") {
        this.setState({ searchFiltered: true })
      }
    });
    let searchFilterArr = this.state.charities.filter((charity) => {
      return charity.charity_name.indexOf(this.state.search) !== -1
    })
    this.setState({ searchFilteredCharities: searchFilterArr })
  }

  filterResults(category) {
    let filterArr = [];
    console.log("something");
    for (let index = 0; index < this.state.charities.length; index++) {
      if (this.state.charities[index].category_name == category) {
        filterArr.push(this.state.charities[index]);
        console.log(filterArr);
        this.setState({ filteredCharities: filterArr });
      }
    }
  }

  render() {
    if (this.state.filtered == false && this.state.searchFiltered == false) {
      return (
        <>
          <div>
            <title>Document</title>

            <div className="charityWrapper">
              <div className="charityBorder">
                <div className="charityContent">
                  <div className="charityNavLeft">
                    <div className="directoryBackground">
                      <h1 className="directory"> Charity Directory</h1>
                    </div>
                    <p
                      className="all"
                      onClick={() => {
                        this.setState({ filtered: false });
                      }}
                    >
                      {" "}
                      All
                    </p>
                    <p
                      className="animals"
                      onClick={() => {
                        this.filterResults("Animals");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Animals{" "}
                    </p>
                    <p
                      className="arts"
                      onClick={() => {
                        this.filterResults("Arts, Culture, Humanities");
                        this.setState({ filtered: true });
                      }}
                    >
                      Arts, Cultures, and Humanities{" "}
                    </p>

                    <p
                      className="commDev"
                      onClick={() => {
                        this.filterResults("Community Development");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Community Development{" "}
                    </p>
                    <p
                      className="education"
                      onClick={() => {
                        this.filterResults("Education");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Education{" "}
                    </p>
                    <p
                      className="health"
                      onClick={() => {
                        this.filterResults("Health");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Health{" "}
                    </p>
                    <p
                      className="humanServices"
                      onClick={() => {
                        this.filterResults("Human Services");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Human Services{" "}
                    </p>
                    <p
                      className="international"
                      onClick={() => {
                        this.filterResults("International");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      International{" "}
                    </p>
                    <p
                      className="rights"
                      onClick={() => {
                        this.filterResults("Human and Civil Rights");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Human and Civil Rights{" "}
                    </p>
                    <p
                      className="religion"
                      onClick={() => {
                        this.filterResults("Religion");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Religion{" "}
                    </p>
                    <p
                      className="research"
                      onClick={() => {
                        this.filterResults("Research and Public Policy");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Research and Public Policy{" "}
                    </p>
                  </div>
                  <div className="containerRed">
                    <main className="container">
                      <h1 className="text-primary text-center">Charities</h1>
                      <input className="searchFilter form-control"  placeholder="Search for charities.." onChange={(e) => { this.searchFilteredResults(e) }} type="text" />
                      <ul className="list-group">
                        {this.state.charities.map((charity) => (
                          <OrgCard charity={charity} />
                        ))}
                      </ul>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else if (this.state.filtered == true && this.state.searchFiltered == false) {
      return (
        <>
          <div>
            <title>Document</title>

            <div className="charityWrapper">
              <div className="charityBorder">
                <div className="charityContent">
                  <div className="charityNavLeft">
                    <div className="directoryBackground">
                      <h1 className="directory"> Charity Directory</h1>
                    </div>
                    <p
                      className="all"
                      onClick={() => {
                        this.setState({ filtered: false });
                      }}
                    >
                      {" "}
                      All
                    </p>
                    <p
                      className="animals"
                      onClick={() => {
                        this.filterResults("Animals");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Animals{" "}
                    </p>
                    <p
                      className="arts"
                      onClick={() => {
                        this.filterResults("Arts, Culture, Humanities");
                        this.setState({ filtered: true });
                      }}
                    >
                      Arts, Cultures, and Humanities{" "}
                    </p>

                    <p
                      className="commDev"
                      onClick={() => {
                        this.filterResults("Community Development");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Community Development{" "}
                    </p>
                    <p
                      className="education"
                      onClick={() => {
                        this.filterResults("Education");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Education{" "}
                    </p>
                    <p
                      className="health"
                      onClick={() => {
                        this.filterResults("Health");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Health{" "}
                    </p>
                    <p
                      className="humanServices"
                      onClick={() => {
                        this.filterResults("Human Services");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Human Services{" "}
                    </p>
                    <p
                      className="international"
                      onClick={() => {
                        this.filterResults("International");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      International{" "}
                    </p>
                    <p
                      className="rights"
                      onClick={() => {
                        this.filterResults("Human and Civil Rights");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Human and Civil Rights{" "}
                    </p>
                    <p
                      className="religion"
                      onClick={() => {
                        this.filterResults("Religion");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Religion{" "}
                    </p>
                    <p
                      className="research"
                      onClick={() => {
                        this.filterResults("Research and Public Policy");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                      Research and Public Policy{" "}
                    </p>
                  </div>
                  <div className="containerRed">
                    <main className="container">
                      <h1 className="text-primary text-center">Charities</h1>
                      <input className="searchFilter form-control"  placeholder="Search for charities.." onChange={(e) => { this.searchFilteredResults(e) }} type="text" />

                      <ul className="list-group">
                        {this.state.filteredCharities.map((charity) => (
                          <OrgCard charity={charity} />
                        ))}
                      </ul>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    else if (this.state.searchFiltered == true) {
      return (
        <>
          <div>
            <title>Document</title>

            <div className="charityWrapper">
              <div className="charityBorder">
                <div className="charityContent">
                  <div className="charityNavLeft">
                    <div className="directoryBackground">
                      <h1 className="directory"> Charity Directory</h1>
                    </div>
                    <p
                      className="all"
                      onClick={() => {
                        this.setState({ filtered: false });
                      }}
                    >
                      {" "}
                        All
                      </p>
                    <p
                      className="animals"
                      onClick={() => {
                        this.filterResults("Animals");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                        Animals{" "}
                    </p>
                    <p
                      className="arts"
                      onClick={() => {
                        this.filterResults("Arts, Culture, Humanities");
                        this.setState({ filtered: true });
                      }}
                    >
                      Arts, Cultures, and Humanities{" "}
                    </p>

                    <p
                      className="commDev"
                      onClick={() => {
                        this.filterResults("Community Development");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                        Community Development{" "}
                    </p>
                    <p
                      className="education"
                      onClick={() => {
                        this.filterResults("Education");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                        Education{" "}
                    </p>
                    <p
                      className="health"
                      onClick={() => {
                        this.filterResults("Health");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                        Health{" "}
                    </p>
                    <p
                      className="humanServices"
                      onClick={() => {
                        this.filterResults("Human Services");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                        Human Services{" "}
                    </p>
                    <p
                      className="international"
                      onClick={() => {
                        this.filterResults("International");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                        International{" "}
                    </p>
                    <p
                      className="rights"
                      onClick={() => {
                        this.filterResults("Human and Civil Rights");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                        Human and Civil Rights{" "}
                    </p>
                    <p
                      className="religion"
                      onClick={() => {
                        this.filterResults("Religion");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                        Religion{" "}
                    </p>
                    <p
                      className="research"
                      onClick={() => {
                        this.filterResults("Research and Public Policy");
                        this.setState({ filtered: true });
                      }}
                    >
                      {" "}
                        Research and Public Policy{" "}
                    </p>
                  </div>
                  <div className="containerRed">
                    <main className="container">
                      <h1 className="text-primary text-center">Charities</h1>
                      <input className="searchFilter form-control"  placeholder="Search for charities.." onChange={(e) => { this.searchFilteredResults(e) }} type="text" />
                      <ul className="list-group">
                        {this.state.searchFilteredCharities.map((charity) => (
                          <OrgCard charity={charity} />
                        ))}
                      </ul>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export interface IcharityState {
  charities: Array<ICharity>;
}

export default Charities;
