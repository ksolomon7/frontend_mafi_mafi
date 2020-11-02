import React from 'react'
import {Card, Segment, Button} from 'semantic-ui-react'
import ImageModal from './ImageModal'

class SingleProduct extends React.Component{
    
  handleImageClick=()=>{
    // console.log("In image click", this.props.product.image)
    <ImageModal key={this.props.product.id}
                image={this.props.product.image}/>
  }
  
  render(){
      
      let {product_name, description, price, image} = this.props.product

        return (
          <Segment>
            <Card.Group className= "container" itemsPerRow={4}>
              <Card raised image={image} onClick={this.handleImageClick}/>
            </Card.Group>
            <div className="product-name">
              {product_name}
            </div>
            <Segment.Group piled>
            <div className="description">
              <h5>Product Description</h5>
              {description}
            </div>
          
            </Segment.Group>
            <Button>Add To Cart</Button>
          </Segment>
        )
    }
}

export default SingleProduct