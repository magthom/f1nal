import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/home.scss';

const Navbar: React.FC<{}> = () => {
    return (
        <>
       
            <div className="top">
                <div className="logo">
                    <img src="./assets/darklogo.jpg" alt="Helping Hands Logo" width={300} className="auto-style5" height={70} />
                </div>
                <div className="social-media">
                    <p>Login</p>
                    <p>Register</p>
                    <p>Donate</p>
                </div>
                <div className="favIcons" style={{ width: '69px' }}>
                    <div className="fbIcon">
                        <img src="./assets/Icons/124010.png" height={24} width={24} />
                    </div>
                    <div className="twitterIcon">
                        <img src="./assets/twitter.png" height={24} width={24} />
                    </div>
                </div>
            </div>
            <div className="topnav">
                <ul>
                    <li className="homeName"><Link to="/Home">Home</Link></li>
                    <li><Link to="/charities">Charities</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <input className="search" type="text" placeholder="Search for charities.." />
                </ul>
            </div>
           
        </>
    )
}

export default Navbar