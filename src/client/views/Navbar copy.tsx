import React from 'react';

const Navbar: React.FC<{}> = () => {
    return (
        <>
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
                    <input className="search" type="text" placeholder="Search for charities.." />
                </ul>
            </div>
        </>
    )
}

export default Navbar