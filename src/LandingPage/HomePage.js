import React from 'react'
import HamburgerMenu from '../Components/HamburgerMenu'
import UserForm from '../Components/UserForm'

class HomePage extends React.Component{

   render(){
       return( 
           <div className="homepage">
              <h1 className="header">Mafi Mafi</h1>
                <HamburgerMenu/>
                <UserForm handleLogin={this.props.handleLogin}/>
           </div>
       )
   }
}

export default HomePage


