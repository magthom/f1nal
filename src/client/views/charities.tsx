import * as React from 'react';
import { ICharity } from '../UTILS/types';
import OrgCard from '../components/OrgCard';
import Navbar from './Navbar';
import '../scss/charities.scss';


class Charities extends React.Component<IcharityProps, IcharityState> {
	constructor(props: IcharityProps) {
		super(props);
		this.state = { 
			charities: [],
			filteredCharities: []
		  };
		
	}

	async componentDidMount() {
		try {
			
			let r = await fetch('/api/charities');
			let charities = await r.json();
			this.setState({ charities });
			console.log(charities)

		} catch (error) {
			console.log(error);
		}
	}

	filterResults(category) {
	
	}
	
	
	render() {
		
		return (
			<>
				<div>

					<title>Document</title>
					<Navbar />
					<div className="charityWrapper">
						<div className="charityBorder">
							<div className="charityContent">
								<div className="charityNavLeft">
									<div className="directoryBackground">
										<h1 className="directory"> Charity Directory</h1>
									</div>
		<p className="animals" onClick={() => this.filterResults("Animals")}> Animals </p>
									<p className="arts">Arts </p>
									<p className="culture"> Culture </p>
									<p className="humanities"> Humanities </p>
									<p className="commDev">  Community Development </p>
									<p className="education"> Education </p>
									<p className="health"> Health </p>
									<p className="humanServices"> Human Services </p>
									<p className="international"> International </p>
									<p className="rights"> Human and Civil Rights </p>
									<p className="religion"> Religion </p>
									<p className="research"> Research and Public Policy </p>
								</div>
								<div className="containerRed">
								<main className="container">
                <h1 className="text-primary text-center">Charities</h1>
                <ul className="list-group"> 
                    {this.state.charities.map(charity => <OrgCard charity={charity} />)}
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

export interface IcharityProps {
	charities: Array<ICharity>;
	
 }

export interface IcharityState {
	charities: Array<ICharity>;

}

export default Charities;
