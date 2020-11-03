import React from 'react'
import {Card, Segment, Button, Modal, Image, Header} from 'semantic-ui-react'


class SingleProduct extends React.Component{
    
  state={
    isOpen:false
  }

  handleOnClose=()=>{
    this.setState({
      isOpen:!this.state.isOpen
    })
  }

  handleOnOpen=()=>{
    this.setState({
      isOpen:!this.state.isOpen
    })
  }

  handleButtonClick=()=>{
    // console.log("in add button", this.props.product.id)
    this.props.createAnOrder(this.props.product.id)
  }
 
  
  
  render(){
      
      let {product_name, description, price, image} = this.props.product

        return (
      
          <div>
            <Card className= "container">
              <Card raised image={image} onClick={this.handleShowModal}/>
            </Card>
            <div className="product-name">
              {product_name}
            </div>
            {/* <Segment.Group piled>
            </Segment.Group> */}
            <Segment>
            <Modal
                onClose={this.handleOnClose}
                onOpen={this.handleOnOpen}
                open={this.state.open}
                trigger={<Button className="modal-button">Show Product Detail</Button>}
                >
                <Modal.Header>{product_name}</Modal.Header>
                <Modal.Content image>
                  <Image size='medium' src={image} wrapped />
                  <Modal.Description>
                    <Header>Product Description</Header>
                    <p>
                      {description}
                    </p>
                    <p>{price} USD</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  {/* <Button color='black'>
                    Nope
                  </Button> */}
                  <Button
                    content="Add To Cart"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={this.handleButtonClick}
                    positive
                  />
                </Modal.Actions>
            </Modal>
           </Segment>
           </div>
        )
    }
}

export default SingleProduct