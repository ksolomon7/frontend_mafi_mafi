import React from 'react'
import {Card, Grid, Image} from 'semantic-ui-react'
import {withRouter, Link} from 'react-router-dom'

class SingleProduct extends React.Component{
      
  
  render(){
      
      let {id, product_name, image} = this.props.product

        return (
              <>
                <Grid centered columns={4}>
                  <Grid.Column>
                    <Card className="products">
                        <Link to={`/products/${id}`}>
                            <Image size="medium" src={image} alt="Product"/>
                        </Link>  
                    </Card> 
                  </Grid.Column>
                </Grid>
             </>
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