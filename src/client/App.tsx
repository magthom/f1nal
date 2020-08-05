import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Details from './views/Details';
import Charities from './views/Charities';
import { ICharity, TCharitiesAPI } from "./UTILS/types";


const App: React.FC<IAppProps> = () => {

    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/charities/:id" component={Details} />         
          <Route exact path="/charities/" component={Charities} />         

        </Switch>
    </BrowserRouter>

    );
    }


export interface IAppProps {}

export interface IAppState {
  charities: Array<ICharity>;
}

export default App;