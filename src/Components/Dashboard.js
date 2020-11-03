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
                                       ordered_on={order.ordered_on}
                                       total={order.total}
                                       quantity={order.quantity}
                                       order={order.orders}
            />
        })


        return (
            <div>
                <div>
                <h1>Dashboard</h1>
                <h3>Welcome Back {this.props.full_name}</h3>
                
                <hr/>
                <h3>Past Order</h3>
                    {pastOrderArray}
       
                <div>
                    <Button floated="right" onClick={this.logoutOnClick}>Logout</Button>
                </div>
                </div>
            </div>
        )
    }
}

export default Dashboard