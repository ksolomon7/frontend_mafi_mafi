import React from 'react'
import HamburgerMenu from '../Components/HamburgerMenu'
import UserForm from '../Components/UserForm'
import {Button} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import {ThemeProvider} from 'styled-components'
import Chatbot from 'react-simple-chatbot'


class HomePage extends React.Component{

   render(){

    const theme = {
      background: '#f5f8fb',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#EF6C00',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: '#EF6C00',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    };

    let step=[{
        id: '0',
        message: 'Welcome to Mafi Mafi!',
        delay: 1000,
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
        hideInput:true,
        trigger:'3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}! What would you like to do?',
        trigger:'4'
      },
      {
        id:'4',
        options:[
          // {value: 'Login', label: "Login", trigger:'Login'},
          {value: 'register', label: "Register", trigger: 'Register'},
          {value: 'product', label: "Product Page", trigger: "Product"},
          {value: "about", label:"About Page", trigger: "About"},
          {value: 'nothing', label: 'Nothing right now', trigger:"Goodbye"}
        ]
      },
      {
        id:'Register',
        component: (
          <Link to="/register">
          <Button>Register</Button>
          </Link>
        ),
        end:true
      },
      {
        id:'Product',
        component: (
          <Link to="/">
          <Button>Products</Button>
          </Link>
        ),
        end:true
      },
      {
        id:'About',
        component: (
          <Link to="/about">
          <Button>About</Button>
          </Link>
        ),
        end:true
      },
      {
        id:'Goodbye',
        message: "Goodbye!",
        end:true
      }
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
              <ThemeProvider theme={theme}>
                <Chatbot headerTitle="Mafi Mafi Assistant" 
                recognitionEnable={true} 
                steps={step} 
                botDelay="2000"
                floating="false"
                cache="true"/>
              </ThemeProvider>
            </div>
           </>
       )
   }
}

export default HomePage


