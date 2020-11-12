import React from 'react'
import SingleProduct from './SingleProduct'


class ProductContainer extends React.Component{

   
    render(){

        let productsArray= this.props.products.map(product=>{
            return <SingleProduct key={product.id}
                                  product={product}
                                  createAnOrder={this.props.createAnOrder}
                                  token={this.props.token}
                                  />
        })
    
        return(
            <div className="product container">
                <div className="div-card">
                      {productsArray}
                </div>
            </div>
        )
    }
}

export default ProductContainer