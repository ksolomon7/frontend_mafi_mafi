import React from 'react'
import SingleProduct from './SingleProduct'

class ProductContainer extends React.Component{

   
    render(){
    //    console.log(this.props.products)
        let productsArray= this.props.products.map(product=>{
            return <SingleProduct key={product.id}
                                  product={product}
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