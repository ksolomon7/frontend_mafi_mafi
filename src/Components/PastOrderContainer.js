import React from 'react'
import PastOrders from './PastOrders'


class PastOrderContainer extends React.Component{
    render(){
        console.log("in past Order Container", this.props.order)

        let orderArray=this.props.order.map(order=>{
            return <PastOrders key={order.id}
                               name={order.product_name}
                               image={order.product_image}
                               price={order.product_price}
                               orderDate={order.ordered_on}
                               total={this.props.total}
                               quantity={order.quantity}
            />
        })
        
        return(
            <h1>
                {orderArray}
            </h1>
        )
    }
}

export default PastOrderContainer