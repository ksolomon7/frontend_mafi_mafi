import React from 'react'
import {Segment, Card, Grid, GridColumn} from 'semantic-ui-react'

class PastOrders extends React.Component{
    render(){
        // console.log("in past order", this.props)

        let {name, image, price, quantity } =this.props   
        return(
            <div className="past order">
            <Grid>
                <GridColumn width={8}>
               <Card.Group className= "container" itemsPerRow={2}>
                 <Card raised image={image} onClick={this.handleShowModal}/>
               </Card.Group>
               </GridColumn>
               <GridColumn width={8}>
                   <Segment>
                    Product Name:{name}
                    </Segment>
                    <Segment>
                    Quantity: {quantity}
                    </Segment>
                    <Segment>
                    Price:{price} USD
                    </Segment>
              </GridColumn> 
            </Grid>

            </div>
        )
    }
}

export default PastOrders