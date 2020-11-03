import React from 'react'
import {Segment, Card} from 'semantic-ui-react'

class PastOrders extends React.Component{
    render(){
        console.log("in past order", this.props) 
        let {name, image, orderDate, price, quantity } =this.props   
        return(
            <div>
            <Segment>
               <Card.Group className= "container" itemsPerRow={4}>
                 <Card raised image={image} onClick={this.handleShowModal}/>
               </Card.Group>
               <Segment stacked="true">
                <Segment.Group>
                    {name}
                </Segment.Group>
                <Segment textAlign="right">
                    {price} USD
                </Segment>
                </Segment> 
            </Segment>
            <Segment floated="right">
                {}
            </Segment>

            </div>
        )
    }
}

export default PastOrders