import React from 'react'
import '../App.css'
import {slide as Menu} from 'react-burger-menu'
import {Link} from 'react-router-dom'



class HamBurgerMenu extends React.Component{

    state={
        toggle:false
    }

    logoutOnClick=()=>{
        this.props.handleLogout()
    }

    showProducts=()=>{
        this.setState({
            toggle: !this.state.toggle
        })
    }

    handleClick=(evt)=>{
        this.props.selectedCategory(evt.target.value)
    }
    render(){

             let dropdownOption= ()=>{
                return(
                <ul className="dropdown ul">
                <li>
                <div onClick={this.handleClick}>
                   <option value={"All"}>All Products</option>
                    <option value={"Mask"}>Mask</option>
                    <option value={"Dress"}>Dress</option>
                    <option value={"Kimono"}>Kimonos</option>
                    <option value={"Scarf"}>Scarf</option>
                    <option value={"Jacket"}>Jacket</option>
                    <option value={"Jumpsuit"}>Jumpsuit</option>
                    <option value={"Pant"}>Pant</option>
                    <option value={"Shirt"}>Shirt</option>
                    </div>
                 </li>
                </ul>
                )
             }
     
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
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </li>
                </ul>
                <ul> 
                    <li>
                        <Link to="/">
                            <button onClick={this.showProducts}>Products</button>
                        </Link>
                    </li>
                </ul> 
                 
                    {this.state.toggle?
                    dropdownOption()
                    :
                     null
                      }
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

