import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const Header = () => {
    const [active, setActive] = useState("home")
    return(
        <div>
            <div className="ui secondary pointing menu">
                <Link className={`item ${active === "home" ? 'active' : null}`} to="/" onClick={(e) => setActive("home")}>
                    Home
                </Link>
                <Link className={`item ${active === "cdp" ? 'active' : null}`} to="/elements" onClick={(e) => setActive("cdp")}>
                    Code de Pointage Elements
                </Link>
                <Link className={`item ${active === "gymnasts" ? 'active' : null}`} to="/gymnasts" onClick={(e) => setActive("gymnasts")}>
                    Manage Gymnasts
                </Link>
                <div className="right menu">
                    <div className="item">
                        <AmplifySignOut/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;