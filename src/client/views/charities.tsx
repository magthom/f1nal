import * as React from 'react';
import { ICharity } from '../UTILS/types';

class Charities extends React.Component<IcharityProps, IcharityState> {
	constructor(props: IcharityProps) {
		super(props);
		this.state = {charities:[]};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/charities/get');
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

export interface IcharityProps {}

export interface IcharityState {
	charities: Array<ICharity>
}

export default Charities;
