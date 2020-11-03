import React from 'react'
import SingleProduct from './SingleProduct'

class ProductContainer extends React.Component{

   
    render(){
    //    console.log(this.props)
        let productsArray= this.props.products.map(product=>{
            return <SingleProduct key={product.id}
                                  product={product}
                                  createAnOrder={this.props.createAnOrder}
                                  />
        })
    
        return(
            <>
            {productsArray}
            </>
        )
    }
}

export default ProductContainer