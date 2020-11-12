import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { withRouter} from 'react-router-dom'
import SearchBar from '../Products/SearchBar'



class TopMenu extends Component {

  handleMenuHeader=(evt)=>{
    return this.props.history.push("/")
  }

  handleItemClick=()=>{
    return this.props.history.push("/dashboard")
  }

  handleCart=()=>{
    return this.props.history.push("/cart")
  }
  logout=()=>{
    this.props.handleLogout()
  }
  
 

  render() {
    
    return (
      <Menu size="mini" borderless className="main menu">

        <Menu.Item header onClick={this.handleMenuHeader}>Mafi Mafi</Menu.Item>
        <Menu.Item><SearchBar searchTermChange={this.props.searchTermChange}
                              searchTerm={this.props.searchTerm}/></Menu.Item>
        
         {this.props.token?
         <>
         <Menu.Item
            icon="user"
            name={`Hello, ${this.props.full_name}`}
            position="right"
            onClick={this.handleItemClick}  
            className="welcome name"
          />
          <Menu.Item
            icon="cart"
            size= 'huge'
            name={this.props.user_current_cart.orders.length}
            onClick={this.handleCart}
            />
        </>
        :
        null
       }
      </Menu>
    )
  }
}

export default withRouter(TopMenu)