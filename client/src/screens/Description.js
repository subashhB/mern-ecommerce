import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

export default function Description({match}){
    let {id:productId} = useParams();
    const getProductByIdState = useSelector(state=> state.getProductByIdReducer)
    const{product, loading, error}= getProductByIdState
    const dispatch = useDispatch();
    const[quantity, setQuantity] = useState(1);
    
    const addItemToCart=()=>{
        dispatch(addToCart(product,quantity))
    }

    useEffect(()=>{
        dispatch(getProductById(productId))
    },[]) 
    
    return (
      <div>
        {loading ? (
          <div
            className="spinner-border position-absolute top-50 start-50 translate-middle"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : error ? (
          <h1>Somthing went Wrong</h1>
        ) : (
          <div className="row">
            <div className="col-md-6">
              <div className="card p-3 m-2" >
                <h1>{product.name}</h1>
                <img src={product.image} className="bigimg" />
                <p>{product.description}</p>
              </div>
            </div>
            <div className="col-md-6 text-start">
              <div className="m-2">
                <h1>Price: {product.price}</h1>
                <hr />
                <h1>Select Quantity: </h1>
                <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                  {[...Array(product.countInStock).keys()].map((x, i) => {
                    return <option value={i + 1} key={i}>{i + 1}</option>;
                  })}
                </select>
                <hr />
                <button className="btn btn-dark " onClick={addItemToCart} disabled={!product.countInStock}>ADD TO CART</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}