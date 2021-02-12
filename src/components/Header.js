import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState("home")
    return(
        <div className="ui secondary pointing menu">
            <Link name="home" className={`item ${active === "home" ? 'active' : null}`} to="/" onClick={(e) => setActive(e.target.name)}>
                Home
            </Link>
            <Link name="cdp" className={`item ${active === "cdp" ? 'active' : null}`} to="/elements" onClick={(e) => setActive(e.target.name)}>
                Code de Pointage Elements
            </Link>           
        </div>
    )
}

export default Header;