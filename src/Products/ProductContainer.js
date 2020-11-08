import React from 'react'
import SingleProduct from './SingleProduct'
import SearchBar from './SearchBar'

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
            <>
            <div className="div-card">
                <h1>Products</h1>
                <SearchBar searchTermChange={this.props.searchTermChange}
                           searchTerm={this.props.searchTerm}/>
            </div>
            {productsArray}
            </>
        )
    }
}

export default ProductContainer