import React from 'react';
import {Link} from 'react-router-dom';

const Navbar: React.FC<{}> = () => {
    return (
        <>
                <div id="logo">
                    <img src="./assets/darklogo.jpg" alt="Helping Hands Logo" width={300} className="auto-style5" height={70} />
                </div>
                <div id="social-media">
                    <p>Login</p>
                    <p>Register</p>
                    <p>Donate</p>
                </div>
                <div className="favIcons" style={{ width: '69px' }}>
                    <div id="fbIcon">
                        <img src="./assets/Icons/124010.png" height={24} width={24} />
                    </div>
                    <div id="twitterIcon">
                        <img src="./assets/twitter.png" height={24} width={24} />
                    </div>
                </div>
            <div id="topnav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="Charities">Charities</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <input className="search" type="text" placeholder="Search for a Charity!" />
                </ul>
            </div>
            </>
    )
}


export default Navbar
