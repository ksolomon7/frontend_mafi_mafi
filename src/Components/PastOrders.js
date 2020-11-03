import React from 'react'
import {Segment, Card} from 'semantic-ui-react'

class PastOrders extends React.Component{
    render(){
        // console.log("in past order", this.props) 
        let {name, image, price, quantity } =this.props   
        return(
            <div>
            <Segment>
               <Card.Group className= "container" itemsPerRow={4}>
                 <Card raised image={image} onClick={this.handleShowModal}/>
               </Card.Group>
               <Segment>
                    {name}
                <Segment>
                    Quantity: {quantity}
                </Segment>
                <Segment textAlign="right">
                    {price} USD
                </Segment>
              </Segment> 
            </Segment>

            </div>
        )
    }
}

export default PastOrders