import React from 'react'
import CartItem from './CartItem'
import {Segment} from 'semantic-ui-react'

class Cart extends React.Component{
    render(){
        // console.log("in cart", this.props.current_cart)
        let newOrder= this.props.current_cart.orders.map(order=>{
            return <CartItem key={order.id}
                             order_id={order.id}
                             deleteAProductFromOrder={this.props.deleteAProductFromOrder}
                             product_name={order.product_name}
                             product_price={order.product_price}
                             product_image={order.product_image}
                             quantity={order.quantity}/>
        })


        return(
            <div>
                <Segment>
                    <h1>Cart</h1>
                </Segment>
               
                <Segment size="big">
                     {newOrder}
                    
                </Segment> 
                 

             
            </div>
        )
    }
}

export default Cart