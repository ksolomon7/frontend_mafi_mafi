import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'


class NavBar extends React.Component{
    render(){
        return( 
            <div className="navigation">
                <ul>
                    {/* <li className="logo">
                        <img src ="https://i.imgur.com/rVdyVuN.png"/>
                    </li> */}
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar

// shows a