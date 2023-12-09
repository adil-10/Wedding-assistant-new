import React from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function NavBar() {
    //otherwise return nav bar
    return (
        <header
            className="headerLinks"
            style={{
                display: "flex",
                paddingTop: "20px",
                paddingLeft: "20px",
                backgroundColor: '#f2f2f2'
            }}
        >
            <nav className="headerNavLinks">
                <div className="links" >

                    <NavLink to="/HomePage"
                        style={{
                            display: "inline-block",
                            paddingRight: "20px"
                        }}>HomePage</NavLink>
                </div>
            </nav>
        </header >
    );
}

export default NavBar;

