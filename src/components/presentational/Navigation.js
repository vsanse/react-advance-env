import React from 'react';
import { notify } from 'react-notify-toast';
import { Link } from 'react-router-dom';
import * as routes from '../../UiConfigs/routes'
const Navigation =(props)=>{
    return (
        <div className="navbar-container">
            <div className="logo">
                <Link to={routes.LANDING}>
                    {/* <img src={require("../../static/images/logo.png")} alt="logo"/> */}
                </Link>
            </div>
        </div>
    )
}

export default Navigation;