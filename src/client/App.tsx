import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";
import Charities from "./views/Charities";
// import About from "./views/About"
import { ICharity, CharitiesAPI } from "./UTILS/types";

const App: React.FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/charities/" component={Charities} />
        {/* <Route exact path="/about/" component={About} /> */}
      </Switch>
    </BrowserRouter>
  );
};
export interface IAppProps {}

export interface IAppState {
  charities: Array<ICharity>;
}
export default App;
