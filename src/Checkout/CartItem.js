import React from 'react'
import {Segment,Card, Button} from "semantic-ui-react"

class CartItem extends React.Component{

    
    handleDeleteClick=()=>{
        fetch(`http://localhost:3000/orders/${this.props.order_id}`, {
            method:"DELETE"
        })
        .then(resp=>resp.json())
        .then(deletedOrder=>{
            this.props.deleteAProductFromOrder(deletedOrder.id)
        })      
    }


    handleAddQuantity=()=>{
        console.log("this is sum", this.props.totalSum)
        
        fetch(`http://localhost:3000/orders/${this.props.order_id}`, {
            method:"PATCH",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                quantity: this.props.quantity + 1,
            })
        })
        this.props.increaseQuantity(this.props.order_id)
    }

    handleSubtractQuantity=()=>{
        fetch(`http://localhost:3000/orders/${this.props.order_id}`, {
            method:"PATCH",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                quantity: this.props.quantity - 1,
            })
        })
       this.props.decreaseQuantity(this.props.order_id)
    }

    render(){
        // console.log("cart item", this.props)
        let {product_name, product_price, product_image, quantity}= this.props
        return(
            <div>
                    <Segment className="cart item">
                     <Button floated="right" onClick={this.handleDeleteClick}>X</Button> 
                    <Card>
                        <img src={product_image} alt={product_name}/>
                        <Segment>
                            {product_name}
                        </Segment>
                        <Segment>
                            {product_price} USD
                        </Segment>
                    </Card>
                   
                    
                 
                        <Button onClick={this.handleAddQuantity}>Increase Quantity+</Button>
                        <Button>{quantity}</Button>
                        <Button onClick={this.handleSubtractQuantity}>Decrease Quantity-</Button>
                  
                    </Segment>
            </div>
        )
    }
}

export default CartItem