import React from 'react'
import {Grid, Button, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Zoom from 'react-img-zoom'

class SpecificProduct extends React.Component{

   
    addToCart=()=>{
        if(this.props.token){
            this.props.addProduct(this.props.product)
        }else{
            // console.log("in here")
           alert('Please login to your account.')
        }
    }

    render(){

       
        // console.log("in create an order", this.props)
        let {product_name, price, description, image}= this.props.product

        return(
                <div className="specific-div">
                     <Grid columns="equal">
                        <div className="specific-product">
                          <p className="product_name" >{product_name}</p>
                          <p className="product-price">${price}.00</p>
                          <div className="desc">
                            <p className="product-desc"> {description}</p>
                        </div>
                        <Segment>
                        <Button  onClick={this.addToCart}>Add to Cart</Button>
                        <Link to="/products">
                                <Button>Go Back To Products</Button>
                        </Link>
                        </Segment>
                        </div>
                    
                    <Grid.Column width={2} >
                        <Zoom
                         img={image} 
                         zoomScale={3}
                         width={600}
                         height={600}
                         transitionTime={0.5}/>
                    </Grid.Column>
                </Grid>
                </div>
        )
    }
}

export default SpecificProduct

