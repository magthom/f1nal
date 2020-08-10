import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/home.scss';

const Navbar: React.FC<{}> = () => {
    return (
        <>
       
            <div className="top">
                <div className="logo">
                    <img src="./assests/redlogo2.jpg" alt="Helping Hands Logo" width={300} className="auto-style5" height={70} />
                </div>
                <div className="social-media">
                    <p>Login</p>
                    <p>Register</p>
                    <p>Donate</p>
                </div>
                <div className="favIcons" style={{ width: '69px' }}>
                    <div className="fbIcon">
                        <img src="./assests/Icons/fbicon.png" height={24} width={24} />
                    </div>
                    <div className="twitterIcon">
                        <img src="./assests/Icons/twittericon.png" height={24} width={24} />
                    </div>
                    <div className="instaIcon">
                        <img src="./assests/Icons/instaicon.png" height={24} width={24} />
                    </div>
                    <div className="ytIcon">
                        <img src="./assests/Icons/yticon.png" height={24} width={24} />
                    </div>
                </div>
            </div>
            <div className="topnav">
                <ul>
                    <li className="homeName"><Link to="/">Home</Link></li>
                    <li><Link to="/charities">Charities</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <input className="search" type="text" placeholder="Search for charities.." />
                </ul>
            </div>
           
        </>
    )
}

export default Navbar
