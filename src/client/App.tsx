import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Details from './views/Details';
import Charities from './views/Charities';
import About from './views/About';
import { Component } from "react";
import { ICharity, CharitiesAPI } from './UTILS/types';

const App: React.FC<IAppProps> = () => {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
            </Route>
        {/* <Route exact path="/details/:id">
           <Details />
           </Route> */}
            <Route exact path="/charities/">
            <Charities />
          </Route> 
          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
    </BrowserRouter>

    )
    }


export interface IAppProps {
 
}

export interface IAppState {
  charities: Array<ICharity>
}
export default App;
