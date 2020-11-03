import React from 'react'
import './App.css'
import Header from './Components/Header'
import HomePage from './LandingPage/HomePage'
import LoginForm from './Components/LoginForm'
import ProductContainer from './Products/ProductContainer'
import Dashboard from './Components/Dashboard'
import Cart from './Checkout/Cart'
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'



class App extends React.Component{

  state={
    products:[],
    token:"",
    username:"",
    fullname:"",
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


renderLoginForm=(routerProps)=>{
  return <LoginForm handleLogin={this.handleLogin}/>
}


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


handleResponse=(resp)=>{
  if(resp.error){
    console.error("Incorrect Username/Password")
  }else{
    localStorage.token=resp.token
    this.setState({
      token:resp.token,
      username: resp.user.username,
      fullname: resp.user.full_name,
      user_current_cart: resp.user.user_current_cart,
      previous_orders: resp.user.past_orders
    })
    this.props.history.push("/dashboard")
  }
}

showProducts=()=>{
  return <ProductContainer products={this.state.products} />
}

showDashBoard=()=>{
  if(this.state.token){
    return <Dashboard full_name={this.state.fullname} 
                      pastorders={this.state.previous_orders}
                      handleLogout={this.handleLogout}/>
  }else{
    return <Redirect to="/login"/>
  }
}

showCart=()=>{
  <Cart current_cart={this.user_current_cart} />
}



handleLogout=()=>{
  console.log("in handle logout")
  this.setState({
    token:"",
    username:"",
    fullname:"",
    user_current_cart:{
      id:0,
      orders:[]
    },
    previous_orders:[]
  })
  localStorage.clear();
  <Redirect to="/home"/>
}

  render(){
    
    return (
      <div className="App">
          <Header/>
          
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact render={this.renderLoginForm}/>
            <Route path="/products" exact component={this.showProducts}/>
            <Route path="/cart" exact component={this.showCart} />
            <Route path="/dashboard" exact component={this.showDashBoard}/>
          </Switch>
      </div>
    )
  }
}

export default withRouter(App);
