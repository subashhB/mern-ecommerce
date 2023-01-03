import React from "react";
import { Link } from "react-router-dom";

export default function Product({product}) {
    return(
        <div>
            <div>   
                <Link to={`product/${product._id}`}>    
                    <img src={product.image} className="img-fluid"/>
                    <h1>{product.name}</h1>
                    <h1>Rating: {product.rating}</h1>
                    <h1>Price: {product.price}</h1>
                </Link>
            </div>
        </div>
    )
}