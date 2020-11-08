import React from 'react'
import PastOrderContainer from './PastOrderContainer'


class Dashboard extends React.Component{



    render(){
        // console.log("in dashboard", this.props.pastorders)

        let pastOrderArray= this.props.pastorders.map(order=>{
            return <PastOrderContainer key={order.id}
                                       ordered_on={order.ordered_on}
                                       total={order.total}
                                       quantity={order.quantity}
                                       order={order.orders}
            />
        })


        return (
            <div className="dashboard-container">
                <div className="dashboard">
                <h1>Dashboard</h1>
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