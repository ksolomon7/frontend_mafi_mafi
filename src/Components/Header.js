import React from 'react'
import NavBar from './NavBar'

class Header extends React.Component{
    render(){
        return(
           <div className="header">
               <h1>Mafi Mafi</h1>
               <NavBar/>
              {/* <img src="https://i.imgur.com/kO2ZfpY.png"/> */}
           </div>
       )
    }
}

export default Header