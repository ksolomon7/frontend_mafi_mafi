import React from 'react'
import PastOrderContainer from './PastOrderContainer'
import {Segment} from 'semantic-ui-react'

class Dashboard extends React.Component{



    render(){
        // console.log("in dashboard", this.props.pastorder)

        let pastOrderArray= this.props.pastorders.map(order=>{
            return <PastOrderContainer key={order.id}
                                       ordered_on={order.ordered_on}
                                       quantity={order.quantity}
                                       order={order.orders}
                                       total={order.total}
            />
        })


        return (
            <div className="dashboard-container">
                <div className="dashboard">
                <Segment inverted="true" raised="true">
                    <h1>Dashboard</h1>
                </Segment>
                <h3>Welcome Back {this.props.full_name}</h3>
                
                <hr/>
                <h3>Past Order</h3>
                    {pastOrderArray}
                </div>
            </div>
        )
    }
}

export default Dashboard