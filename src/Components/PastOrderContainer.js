import React from 'react'
import {Segment} from 'semantic-ui-react'
import PastOrders from './PastOrders'


class PastOrderContainer extends React.Component{
    
    state={
        open: false
    }
    
    
    render(){
        console.log("in past Order Container", this.props.total)

        let orderArray=this.props.order.map(order=>{
            return <PastOrders key={order.id}
                               name={order.product_name}
                               image={order.product_image}
                               price={order.product_price}
                               quantity={order.quantity}
                               total={this.props.total}
            />
        })
        
        return(
            <div>
                <p>Order Date: {this.props.ordered_on}</p>
                {orderArray}
                {/* <Segment textAlign="right">
                     Total: {this.props.total} USD
                </Segment> */}
            </div>
        )
    }
}

export default PastOrderContainer