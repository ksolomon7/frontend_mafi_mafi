import React from 'react'
import HomePage from './Components/HomePage'


class App extends React.Component{

  state={
    products:[],
    token:"",
    username:"",
    current_cart:{
      id:0,
      orders:[]
    },
    past_orders:[]
  }

  componentDidMount(){
    fetch("http://localhost:3000/products")
    .then(resp=>resp.json())
    .then(products=>{
      console.log("this is products", products)
      this.setState({
        products: products
      })
    })
  }
    // if(localStorage.token){
    //   fetch("http://localhost:3000/keep_loggen_in")
    // }
  




  render(){
    return (
      <div className="App">
      <HomePage/>
      </div>
    )
  }
}

export default App;
