import React from 'react'

class ProductContainer extends React.Component{
    render(){
        console.log("in product container", this.props.products)
        return(
            <>
            ProductContainer
            </>
        )
    }
}

export default ProductContainer