import React from 'react'
import HamburgerMenu from '../Components/HamburgerMenu'
import UserForm from '../Components/UserForm'
import Chatbot from 'react-simple-chatbot'


class HomePage extends React.Component{

   render(){
    let step=[{
        id: '0',
        message: 'Welcome to Mafi Mafi!',
        trigger: '1',
      },
      {
        id: '1',
        message: 'What is your name?',
        trigger:'2',
      },
      {
        id: '2',
        user:true,
        trigger:'3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}! How can I help you?',
        end: true,
      },
    ];
    
       return( 
           <>
            <div className="home page">
                    <h1 className="homepage title">Mafi Mafi</h1>
                    <h3 className="amharic title">ማፊ ማፊ</h3>
                    <HamburgerMenu/>
                    <UserForm handleLogin={this.props.handleLogin}/>
            </div>
            <div>
                <Chatbot headerTitle="Mafi Mafi Assistant" recognitionEnable={true} steps={step} floating="false"/>
            </div>
            {/* <div>
                <footer className="contact footer">
                    <p>Developer: Kalkidan Taye</p>
                    <p><a href="mailto:mafi.eth@gmail.com ">mafi.eth@gmail.com</a></p>
                </footer>
            </div> */}
           </>
       )
   }
}

export default HomePage


