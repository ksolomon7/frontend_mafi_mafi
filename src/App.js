import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import HomePage from './LandingPage/HomePage'
import LoginForm from './Components/LoginForm'
import ProductContainer from './Products/ProductContainer'
import {Switch, Route} from 'react-router-dom'



class App extends React.Component{

  state={
    products:[],
    token:"",
    username:"",
    user_current_cart:{
      id:0,
      orders:[]
    },
    previous_orders:[]
  }

  componentDidMount(){
    fetch("http://localhost:3000/products")
    .then(resp=>resp.json())
    .then(products=>{
      this.setState({
        products: products
      })
    })

    if(localStorage.token){
      fetch("http://localhost:3000/keep_logged_in",{
        method: "GET",
        headers:{
          "Authorization": localStorage.token
        }
      })
        .then(resp=> resp.json())
        .then(secondResp=>{
          this.handleResponse(secondResp)
        })
    }
  }

// Render login Form
renderLoginForm=(routerProps)=>{
  // console.log(routerProps)
  return <LoginForm handleLogin={this.handleLogin}/>
}

// handleLogin
handleLogin=(loginInfo)=>{
  fetch("http://localhost:3000/login",{
    method: "POST",
    headers:{
      "Content-Type":"Application/json"
    },
    body:JSON.stringify({
      username:loginInfo.username,
      password:loginInfo.password
    })
  })
  .then(resp=>resp.json())
  .then(secondResp=>{
    this.handleResponse(secondResp)
  })
}

// handle Response

handleResponse=(resp)=>{
  console.log(resp)
  if(resp.error){
    console.error("Incorrect Username/Password")
  }else{}
  this.setState({
    
  })
 

}

showProducts=()=>{
  return <ProductContainer products={this.state.products} />
}



  render(){
    return (
      <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact render={this.renderLoginForm}/>
            <Route path="/products" component={this.showProducts}/>
          </Switch>
      </div>
    )
  }
}

export default App;
