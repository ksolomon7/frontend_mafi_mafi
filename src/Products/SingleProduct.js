import React from 'react'
import {Image, Card} from 'semantic-ui-react'
import {withRouter, Link} from 'react-router-dom'


class SingleProduct extends React.Component{
      
  state={
    isShown:false
  }

  handleShow=()=>{
    this.setState({
      isShown:!this.state.isShown
    })
  }

  handleNotShow=()=>{
    this.setState({
      isShown:!this.state.isShown
    })
  }

  on

  render(){

      let {id, product_name, image} = this.props.product

        return (
              <div className='flex-container'>
                <div className='div image'>
                  <Card className="single product card">
                        <Link to={`/products/${id}`}>
                            <Image onMouseEnter={this.handleShow} onMouseLeave={this.handleNotShow} size="medium" classname="single product image" src={image} alt="Product"/>
                        </Link>  
                        {this.state.isShown?
                          <span className="mouse over">{product_name}</span>
                              :
                              null  
                          }
                  </Card>
                </div>
             </div>
        )
    }
}

export default withRouter(SingleProduct)


















         
          //  <div>

          //   <Modal
          //       onClose={this.handleOnClose}
          //       onOpen={this.handleOnOpen}
          //       trigger={<Button className="modal-button">Show Product Detail</Button>}
          //       >
          //       <Modal.Header>{product_name}</Modal.Header>
          //       <Modal.Content image>
          //         <Image size='medium' src={image} wrapped />
          //         <Modal.Description>
          //           <Header>Product Description</Header>
          //           <p>
          //             {description}
          //           </p>
          //           <p>{price} USD</p>
          //         </Modal.Description>
          //       </Modal.Content>
          //       <Modal.Actions>
          //         <Button
          //           content="Add To Cart"
          //           labelPosition='right'
          //           icon='checkmark'
          //           onClick={this.handleButtonClick}
          //           positive
          //         />
          //       </Modal.Actions>
          //   </Modal> 
          //   </div> 