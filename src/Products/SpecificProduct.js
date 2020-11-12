import React from 'react'
import {Grid, Button, Segment, Modal} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import Zoom from 'react-img-zoom'


class SpecificProduct extends React.Component{


    state={
        open:false
    }
   
    addToCart=()=>{
        if(this.props.token){
            this.props.addProduct(this.props.product)
        }
        alert("Item has been added to your cart.")
    }

    handleOpen=()=>{
        this.setState({
            open: !this.state.open
        })
       
    }

    handleClose=()=>{
        this.setState({
            open: !this.state.open
        })
        return this.props.history.push("/login")
    }

    renderButton=()=>{
        return (
            <Modal
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            open={this.state.open}
            trigger={<Button>Add To Cart</Button>}
          >
            <Modal.Header>You don't seem to be logged in</Modal.Header>
            <Modal.Actions>
              <Button
                content="Login"
                labelPosition='right'
                icon='checkmark'
                onClick={this.handleClose}
                positive
              />
            </Modal.Actions>
          </Modal>
        )
    }
  
    render(){

        let {product_name, price, description, item_category, image}= this.props.product

        return(
                <div className="specific-div">
                     <Grid columns="equal">
                     <Grid.Column className="specific image" width={8} >
                        <Zoom
                         img={image} 
                         zoomScale={3}
                         width={600}
                         height={600}
                         transitionTime={0.5}/>
                    </Grid.Column>
                        <Grid.Column className="specific-product">
                        <div>
                          <p className="product_name" >{product_name}</p>
                          <p className="product-price">${price}.00</p>
                          <div className="desc">
                            <p className="product-desc"> {description}</p>
                        </div>
                        <div>
                           <p>Category: {item_category}</p>
                        </div>
                        <Segment>
                
                        {this.props.token?
                         <Button  onClick={this.addToCart}>Add to Cart</Button>
                        :
                        this.renderButton()}
  
                        </Segment>
                        </div>
                        </Grid.Column>
                    
                  
                </Grid>
               
                </div>
        )
    }
}

export default withRouter(SpecificProduct)

