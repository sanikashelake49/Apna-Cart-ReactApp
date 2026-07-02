import React from 'react';
import Product from './Product'

export default function ProductList(props){
    //console.log(props)
    return(
        props.productList.length > 0 ?
       props.productList.map((product,i)=>{
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity}  decrementQuantity={props.decrementQuantity} removeItem={props.removeItem} index={i}/>
       })
       :<h1>No Product existing in the cart</h1>
    )
}