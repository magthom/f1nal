import * as React from 'react';
import { useState, useEffect } from 'react';
import { ICharity } from '../UTILS/types';

import { Link } from 'react-router-dom';

class Home extends React.Component<HomeProps> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
    <h1>HOME</h1> 
    <Link to={'/charities'}>
    <p>View Charities</p> 
    </Link> 
    </>
    );
  }
}


export interface HomeProps {
}

export default Home;
