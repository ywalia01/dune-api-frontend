import React, {useState} from 'react'
import logo from '../img/DUNE.svg'
import menuIcon from '../img/menu.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showLinks, setShowLinks] = useState(0);
    return (
        <header>
            <Link to="/">
                <img className="nav-logo" src={logo} alt="logo" />
            </Link>
            <nav className="navbar">
                <ul className="nav-menu" id={showLinks ? "hidden" : ""}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/docu">Documentation</Link>
                    </li>
                    <li>
                        <Link to="/contribute">Contribute</Link>
                    </li>
                </ul>
            </nav>
            <img className="menu-icon" src={menuIcon} onClick={()=>setShowLinks(!showLinks)} alt="menu-icon" />
      </header>
    )
}

export default Header
