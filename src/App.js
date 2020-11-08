import React from 'react'
import HomePage from './LandingPage/HomePage'
import UserForm from './Components/UserForm'
import Register from './Components/Register'
import ProductContainer from './Products/ProductContainer'
import Dashboard from './Components/Dashboard'
import Cart from './Checkout/Cart'
import HamBurgerMenu from './Components/HamburgerMenu'
import SpecificProduct from './Products/SpecificProduct'
import AboutPage from './Components/AboutPage'
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
    previous_orders:[],
    searchTerm: ""
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
    return <UserForm handleLogin={this.handleLogin}/>
}

renderRegisterForm=()=>{
  return <Register handleRegister={this.handleRegister}/>
}

renderSpecificProduct=(routerProps)=>{
  let clickedImage= routerProps.match.params.id
  let matchingProduct= this.state.products.find((product) => {
    return product.id === parseInt(clickedImage)
  })

  if(matchingProduct){
    return <SpecificProduct token={this.state.token}
                            product={matchingProduct} 
                            addProduct={this.createAnOrder}/>
  }else{
    return <p>Not Found</p>
  }
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

handleRegister=(registerInfo)=>{
  console.log("In handle Register")
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
    this.props.history.push("/products")
  }
}

showHomePage=()=>{
  return <HomePage handleLogin={this.handleLogin}/>
}
showProducts=()=>{
 
  let filteredProducts=this.state.products.filter((product) => {
    return product.product_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  })

  return <ProductContainer token={this.state.token} 
                            products={filteredProducts} 
                            createAnOrder={this.createAnOrder}
                            searchTermChange={this.searchTermChange}
                            searchTerm={this.state.searchTerm}
                            />
}

showDashBoard=()=>{
  if(this.state.token){
    return <Dashboard full_name={this.state.fullname} 
                      pastorders={this.state.previous_orders}
                      />
  }else{
    return <Redirect to="/login"/>
  }
}

showCart=()=>{
  if(localStorage.token){
    return <Cart token={this.state.token}   
                 current_cart={this.state.user_current_cart}    
                 deleteAProductFromOrder={this.deleteAProductFromOrder}
                 getNewCart={this.getNewCart}
                 />
  }else{
    return <Redirect to='/login'/>
  }
}

showAboutPage=()=>{
  return <AboutPage />
}

createAnOrder=(productId)=>{
  // console.log("in create an order", productId)
  fetch("http://localhost:3000/orders",{
    method:"POST",
    headers:{
      "Content-Type": "Application/Json"
    },
    body:JSON.stringify({
      product_id:productId.id,
      cart_id:this.state.user_current_cart.id,
      quantity:1
    })
  })
  .then(resp=>resp.json())
  .then(newOrder=>{
    let copyOfOrders=[...this.state.user_current_cart.orders,newOrder]
    let copyOfCart= {
      ...this.state.user_current_cart,
      orders: copyOfOrders
    }
    this.setState({
      user_current_cart:copyOfCart
    })
  })
}

deleteAProductFromOrder=(deletedOrderId)=>{
    let returnedOrders=this.state.user_current_cart.orders.filter(singleOrder=>{
      return singleOrder.id !== deletedOrderId
    })
    let copyOfCart={
      ...this.state.user_current_cart,
      orders: returnedOrders
    }
    this.setState({
      user_current_cart:copyOfCart
    })
}

getNewCart=(resp)=>{
  
      console.log("this is the response", resp)
      let copyOfPreviousOrder= [...this.state.previous_orders, resp.previous_cart]
      this.setState({
        user_current_cart:resp.current_cart,
        previous_orders: copyOfPreviousOrder
        })
    
}

searchTermChange=(searchWord)=>{
  this.setState({
    searchTerm: searchWord
  })
}

handleLogout=()=>{
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
  this.props.history.push("/")
}


  render(){
    return (
      <div className="App">
        <HamBurgerMenu token={this.state.token} handleLogout={this.handleLogout}/>
          <Switch>
            <Route path="/" exact render={this.showHomePage}/>
            
            <Route path="/products" exact component={this.showProducts}/>
            <Route path="/products/:id" exact component={this.renderSpecificProduct}/>
            <Route path="/cart" exact component={this.showCart} />
            <Route path="/login" exact render={this.renderLoginForm}/>
            <Route path="/register" exact component={this.renderRegisterForm}/>
            <Route path="/dashboard" exact component={this.showDashBoard}/>
            <Route path="/about" exact component={this.showAboutPage} />
          </Switch>
      </div>
    )
  }
}

export default withRouter(App);
