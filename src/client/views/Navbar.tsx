import React, { useState, useEffect }  from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../scss/home.scss';
const Navbar: React.FC<{}> = (props) => {
    let history = useHistory() 
    const [charities, setCharities] = useState([])
    const [search, setSearch] = useState("")
    const checkCharities = () => {
        for(let i=0 ; i<charities.length ; i++){
            if (charities[i].charity_name == search) {
                console.log(charities[i].charity_name)
                history.push(`/details/${charities[i].id}`)
            }
        }
    }
    useEffect(() => {
        (async ()=> {
            let r = await fetch("/api/charities");
            let charities = await r.json();
            setCharities( charities );
        })()
    }, [])
    return (
        <>
            <div className="top">
                <div className="logo">
                    <img src="./assests/logo3.jpg" alt="Helping Hands Logo" width={350} className="auto-style5" height={60} />
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
                    <input className="search" type="text" value={search} onChange={(e) => {setSearch(e.target.value)} } placeholder="Search for charities.." />
                    <button className="searchbtn btn btn-primary" onClick={() => {checkCharities()}}>search</button>
                </ul>
            </div>
        </>
    )
}
export default Navbar