import React from 'react'
import '../App.css'
import {slide as Menu} from 'react-burger-menu'
import {NavLink} from 'react-router-dom'



class NavBar extends React.Component{
    render(){
        return( 
            <Menu>
                <div className="navigation">
                <ul>
                    <li className="logo">
                        <img src ="https://i.imgur.com/rVdyVuN.png" alt="Mafi Mafi logo"/>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
                <ul> 
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul> 
                <ul>
                    <li >
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>    
                <ul>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                </ul>
            </div>
          </Menu>
        )
    }
}

export default NavBar

