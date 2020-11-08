import React from 'react'
import '../App.css'
import {slide as Menu} from 'react-burger-menu'
import {Link} from 'react-router-dom'



class HamBurgerMenu extends React.Component{

    logoutOnClick=()=>{
        this.props.handleLogout()
    }

    render(){
        return( 
            <Menu>
                <div className="navigation">
                <ul>
                    <li>
                        <img src ="https://i.imgur.com/rVdyVuN.png" alt="Mafi Mafi logo"/>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                    </li>
                </ul>
                <ul> 
                    <li>
                        <Link to="/products">
                            <button>Products</button>
                        </Link>
                    </li>
                </ul> 
                <ul>
                    <li >
                        <Link to="/about">
                            <button>About</button>
                        </Link>
                    </li>
                </ul>  
                
                    {this.props.token?
                            <>
                             <ul>
                                <li>
                                    <Link to="/cart">
                                        <button>Cart</button>
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="/dashboard">
                                        <button>Dashboard</button>
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <button onClick={this.logoutOnClick}>Logout</button>
                                </li>
                            </ul>
                            </>
                        :
                        null
                    }
            </div>
          </Menu>
        )
    }
}

export default HamBurgerMenu

