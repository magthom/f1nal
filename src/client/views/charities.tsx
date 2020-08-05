import * as React from 'react';
import { ICharity } from '../UTILS/types';
import OrgCard from '../components/OrgCard';
import Navbar from './Navbar';

class Charities extends React.Component<IcharityProps, IcharityState> {
	constructor(props: IcharityProps) {
		super(props);
		this.state = { charities: [] };
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
			<>
				<div>
					&lt;%@ Page Language="C#" %&gt;
		  <title>Document</title>
					<Navbar />
					<link href="CSS/style1.css" rel="stylesheet" type="text/css" media="screen" />
					<style type="text/css" dangerouslySetInnerHTML={{ __html: "\n.auto-style2 {\n\tfont-size: large;\n}\n\t.auto-style5 {\n\t\ttext-align: center;\n\t\tmargin-top: 0px;\n\t\tfont-size: large;\n\t}\n\t.auto-style7 {\n\t\ttext-align: center;\n\t}\n\t.auto-style8 {\n\t\tmargin-right: 68px;\n\t}\n\t" }} />
					<div className="top">
						<div className="logo">
							<img src="./assests/darklogo.jpg" alt="Helping Hands Logo" width={300} className="auto-style5" height={70} />
						</div>
						<div className="social-media">
							<p>Login</p>
							<p>Register</p>
							<p>Donate</p>
						</div>
						<div className="favIcons" style={{ width: '69px' }}>
							<div className="fbIcon">
								<img src="./assests/Icons/124010.png" height={24} width={24} />
							</div>
							<div className="twitterIcon">
								<img src="./assests/twitter.png" height={24} width={24} />
							</div>
						</div>
					</div>
					<div className="topnav">
						<ul>
							<li><a href="index.html" className="auto-style2">Home</a></li>
							<li><span className="auto-style2">&nbsp;&nbsp;&nbsp; </span>
							</li><li><a href="charityDirectory.html" className="auto-style2">Charities</a>&nbsp;&nbsp; </li>
							<li>&nbsp; <a href="about.html" className="auto-style2">About</a></li>
							<input type="text" placeholder="Search for charities.." />
						</ul>
					</div>
					<div className="banner" style={{ height: '1px' }}>
						&nbsp;</div>
					<div className="wrapper">
						<div className="wrapper">
							<div className="content">
								<div>
								</div>
								<div className="navLeft" style={{ width: '15%', height: '1114px' }}>
									<p className="directory" style={{ width: '135px', height: '70px', fontSize: 'medium' }}> Charity Directory</p>
									<p className="auto-style7" style={{ width: '135px', height: '70px', fontSize: 'medium' }}> Animals </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7">Arts </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7"> Culture </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7"> Humanities </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7">  Community Development </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7"> Education </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7"> Health </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7"> Human Services </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7"> International </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7"> Human and Civil Rights </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7"> Religion </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7"> Community Development </p>
									<p style={{ width: '135px', height: '70px', fontSize: 'medium' }} className="auto-style7"> Research and Public Policy </p>
									<p style={{ width: '135px', height: '90px', fontSize: 'medium' }} className="auto-style7"> Human Services </p>
								</div>
							</div>
						</div>
					</div></div>
			</>
		);
	}
}

export interface IcharityProps { }

export interface IcharityState {
	charities: Array<ICharity>;
}

export default Charities;