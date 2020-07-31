import * as React from "react";
import  { ICharity } from "./UTILS/types";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Details from "./views/Details";
import Filter from "./views/Filter";
import Home from "./views/Charities";
import Charities from './views/Charities';

const App: React.FC<IAppProps> = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
			<Route exact path="/" component={Charities}/>
			<Route exact path="/details/:id" component={Details}/>
			<Route exact path="/:filter" component={Filter}/>
		</Switch>
      </BrowserRouter>
    </>
  );
};

export interface IAppProps {}

export interface IAppState {
  charities: Array<ICharity>;
}
export default App;