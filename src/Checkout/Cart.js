import React from 'react'
import CartItem from './CartItem'
import {Segment, Button} from 'semantic-ui-react'
import StripeCheckout from 'react-stripe-checkout'


class Cart extends React.Component{
    
//    can have an onclick to move to transform order but it might complicate things more. 
    

    onToken=(token)=>{
       
        // console.log("this onToken", this.props)
        const total=this.props.current_cart.total
    
        fetch('http://localhost:3000/charges',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                charge: token.id,
                price:total*100
            })
        })

        fetch(`http://localhost:3000/carts/${this.props.current_cart.id}/new_order`, {
                method:"PATCH",
                headers:{
                    'content-type':'application/json',
                    'Authorization': this.props.token
                },
             })
            .then(resp=>resp.json())
            .then(resp=>{
                    console.log("from fetch", resp)
                    this.props.getNewCart(resp)
                })
    }
    
   
    render(){
        console.log("in cart", this.props.current_cart)

        let totalSum = this.props.current_cart.orders.reduce((total, order) => {
            console.log(order.quantity)
            let sumTotal= total + (order.product_price* order.quantity) 
             //needs to have the order.product_price to be multiplied by the quantity
             return sumTotal
          }, 0)

        //quantity value passed in needs to be updated in cartItem
        let newOrder= this.props.current_cart.orders.map(order=>{
            return <CartItem key={order.id}
                             order_id={order.id}
                             deleteAProductFromOrder={this.props.deleteAProductFromOrder}
                             product_name={order.product_name}
                             product_price={order.product_price}
                             product_image={order.product_image}
                             quantity={order.quantity}
                             increaseQuantity={this.props.increaseQuantity}
                             decreaseQuantity={this.props.decreaseQuantity}
                             totalSum={totalSum}
                             />
                             
        })

  
        return(
            <div className="cart-container">
                <Segment>
                    <h1>Cart</h1>
                </Segment>
               
                <Segment size="big">
                    {totalSum ===0
                        ?
                     <p>Your cart is Empty</p>
                        :
                    newOrder
                    }   
                </Segment> 
                
             
                <Segment floated="right">
                    Total :  {totalSum} USD
                    <StripeCheckout name="Mafi Mafi"
                                    token={this.onToken}
                                    stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
                                    // billingAddress
                                    // shippingAddress
                                    currency="USD"
                                    amount={totalSum*100}
                                    >
                    <Button floated="right">Checkout</Button>
                    </StripeCheckout>
                </Segment>
            </div>
        )
    } 
}

export default Cart