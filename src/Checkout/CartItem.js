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


    render(){
       
        let {product_name, product_price, product_image, quantity}= this.props
        return(
            <div>
                    <Segment>
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
                   
                    Quantity: <Button>{quantity}</Button>
                    </Segment>
            </div>
        )
    }
}

export default CartItem