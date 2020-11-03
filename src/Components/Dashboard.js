import React from 'react'
import PastOrderContainer from './PastOrderContainer'
import {Button} from 'semantic-ui-react'

class Dashboard extends React.Component{

    logoutOnClick=()=>{
        this.props.handleLogout()
    }


    render(){
        // console.log("in dashboard", this.props.pastorders)

        let pastOrderArray= this.props.pastorders.map(order=>{
            return <PastOrderContainer key={order.id}
                                       total={order.total}
                                       quantity={order.quantity}
                                       order={order.orders}
            />
        })


        return (
            <div>
                <h1>Dashboard</h1>
                <p>Welcome back {this.props.full_name}</p>
                
                <hr/>
                <h3>Past Order</h3>
                    {pastOrderArray}
            
            <Button floated="right" onClick={this.logoutOnClick}>Logout</Button>
            </div>
        )
    }
}

export default Dashboard