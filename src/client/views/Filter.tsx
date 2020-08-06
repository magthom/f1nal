import * as React from 'react';
import { CharitiesAPI, ICharity } from "../UTILS/types";
import { useParams } from 'react-router-dom';

class Filter extends React.Component<IFilterProps, IFilterState> {
	constructor(props: IFilterProps, { match }) {
		super(props, { match });
        this.state = {charities:[]};
        filtCategory: props.match.params.category_id
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/charities');
			let charities = await r.json();
			this.setState({ charities });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container">
				<h1 className="text-primary text-center">Charities</h1>
				<ul className="list-group"> 
					{this.state.charities.map(charity =>{ 
						return <li key={charity.id} className="list-group-item">{charity.charity_name}
						</li>
					})}
				</ul>
			</main>
		);
	}
	
}

export interface IFilterProps {
	[x: string]: any;
}

export interface IFilterState {
	charities: Array<ICharity>;
}

export default Filter;

// import * as React from 'react';
// import type { CharitiesAPI, ICharity } from "../UTILS/types";
// import { useParams } from 'react-router-dom'

// class Filter extends React.Component<IFilterProps, IFilterState> {
// 	constructor(props: IFilterProps, { match }) {
// 		super(props, { match });
//         this.state = {charities:[]};
//         filtCategory: props.match.params.category_id
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/charities/get');
// 			let charities = await r.json();
// 			this.setState({ charities });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container">
// 				<h1 className="text-primary text-center">Charities</h1>
// 				<ul className="list-group"> 
// 					{this.state.charities.map(charity =>{ 
// 						return <li key={charity.id} className="list-group-item">{charity.charity_name}
// 						</li>
// 					})}
// 				</ul>
// 			</main>
// 		);
// 	}
	
// }

// export interface IFilterProps {}

// export interface IFilterState {
// 	charities: Array<ICharity>;
// }

// export default Filter;

