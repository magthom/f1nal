import * as React from 'react';
import { ICharity } from '../UTILS/types';
import OrgCard from '../components/OrgCard';

class Charities extends React.Component<IcharityProps, IcharityState> {
	constructor(props: IcharityProps) {
		super(props);
		this.state = {charities:[]};
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
					{this.state.charities.map(charity => <OrgCard charity={charity} />)}
				</ul>
			</main>
		);
	}
}

export interface IcharityProps {}

export interface IcharityState {
	charities: Array<ICharity>;
}

export default Charities;
