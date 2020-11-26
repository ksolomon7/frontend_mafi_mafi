import React from 'react'
import HomePage from './LandingPage/HomePage'
import TopMenu from './LandingPage/TopMenu'
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
    searchTerm: "",
    category_search:" "
  }

  componentDidMount(){
    fetch("https://mafi-mafi-backend-api.herokuapp.com/products")
    .then(resp=>resp.json())
    .then(products=>{
      this.setState({
        products: products
      })
    })

    if(localStorage.token){
      fetch("https://mafi-mafi-backend-api.herokuapp.com/keep_logged_in",{
        method: "GET",
        headers:{
          "Authorization": localStorage.token
        }
      })
        .then(resp=> resp.json())
        .then(secondResp=>{
          // console.log("this is second Response", secondResp)
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
  fetch("https://mafi-mafi-backend-api.herokuapp.com/login",{
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
  fetch('https://mafi-mafi-backend-api.herokuapp.com/register', {
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({
      username: registerInfo.username,
      password: registerInfo.password, 
      first_name: registerInfo.first_name,
      last_name: registerInfo.last_name,
      state: registerInfo.state,
      zipcode: registerInfo.zipcode
    })
  })
  .then(resp=>resp.json())
  .then(newUser=>{
    // console.log(newUser)
    this.handleResponse(newUser)})
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
    this.props.history.push("/")
  }
}

showHomePage=()=>{
  return <HomePage handleLogin={this.handleLogin}/>
}

showProducts=()=>{
 
  let filteredProductsFunction=()=>{
  if(this.state.category_search === "All Products"){
    let filteredProducts=this.state.products
    return filteredProducts
  }else if(this.state.category_search === "Scarf"){
    return this.state.products.filter(product => product.item_category === "Scarf")
  }else if(this.state.category_search === "Mask"){
    return this.state.products.filter(product => product.item_category === "Mask")
  }else if(this.state.category_search === "Dress"){
    return this.state.products.filter(product => product.item_category === "Dress")
  }else if(this.state.category_search === "Kimono"){
    return this.state.products.filter(product => product.item_category === "Kimono")
  }else if(this.state.category_search === "Jacket"){
    return this.state.products.filter(product => product.item_category === "Jacket")
  }else if(this.state.category_search === "Pant"){
    return this.state.products.filter(product => product.item_category === "Pant")
  }else if(this.state.category_search === "Jumpsuit"){
    return this.state.products.filter(product => product.item_category === "Jumpsuit")
  }else if(this.state.category_search === "Shirt"){
    return this.state.products.filter(product => product.item_category === "Shirt")
  }else if(this.state.searchTerm !== " "){
    let filteredProducts=this.state.products.filter((product) => {
    return product.product_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  })
   return filteredProducts
}
  }

  return <ProductContainer token={this.state.token}
                            products={filteredProductsFunction()}
                            createAnOrder={this.createAnOrder}
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
                 increaseQuantity={this.increaseQuantity}
                 decreaseQuantity={this.decreaseQuantity}
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
  fetch("https://mafi-mafi-backend-api.herokuapp.com/orders",{
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
  
      // console.log("this is the response", resp)
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

increaseQuantity=(orderId)=>{
  // console.log(orderId)
  let order= this.state.user_current_cart.orders.find(singleOrder=>{
      return singleOrder.id=== orderId
  })

  let quantity= order['quantity']
  let newQuantity=quantity +1
  order['quantity'] =newQuantity
 

  let copyOfOrders= this.state.user_current_cart.orders.map(singleOrder=>{
     if (singleOrder.id === order.id){
       return order
     }else{
       return singleOrder
     }

  })

  let copyOfCart={
    ...this.state.user_current_cart,
    orders: copyOfOrders
  }

   this.setState({
      user_current_cart:copyOfCart
   }) 


}

decreaseQuantity=(orderId)=>{
  let order= this.state.user_current_cart.orders.find(singleOrder=>{
    return singleOrder.id=== orderId
  })

  let quantity= order['quantity']
  let newQuantity=quantity -1
  order['quantity'] =newQuantity
  console.log("this is order", order)

  let copyOfOrders= this.state.user_current_cart.orders.map(singleOrder=>{
    if (singleOrder.id === order.id){
      return order
    }else{
      return singleOrder
    }

  })

  let copyOfCart={
    ...this.state.user_current_cart,
    orders: copyOfOrders
  }

  this.setState({
      user_current_cart:copyOfCart
  }) 
}

selectedCategory=(choice)=>{
  this.setState({
    category_search:choice
  })
}
  render(){
    // console.log("app.js", this.state)
    return (
      <div className="App">
       {this.props.location.pathname === "/login"?
            null
            :
        <TopMenu  token={this.state.token} 
                  full_name={this.state.fullname} 
                  searchTerm={this.state.searchTerm}  
                  searchTermChange={this.searchTermChange}
                  logout={this.handleLogout}
                  user_current_cart={this.state.user_current_cart}/>
          } 
        <HamBurgerMenu  selectedCategory={this.selectedCategory}
                        token={this.state.token} 
                        handleLogout={this.handleLogout}/>
          <Switch>
            <Route path="/login" exact render={this.showHomePage}/>
            <Route path="/" exact component={this.showProducts}/>
            <Route path="/products/:id" exact component={this.renderSpecificProduct}/>
            <Route path="/cart" exact component={this.showCart} />
            {/* <Route path="/login" exact render={this.renderLoginForm}/> */}
            <Route path="/register" exact component={this.renderRegisterForm}/>
            <Route path="/dashboard" exact component={this.showDashBoard}/>
            <Route path="/about" exact component={this.showAboutPage} />
          </Switch>
         
      </div>
    )
  }
}

export default withRouter(App);
