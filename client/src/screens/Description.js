import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { addToCart } from "../actions/cartActions";
import Review from "../components/Review";

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
          <Loader/>
        ) : error ? (
          <Error error="Something went wrong..."/>
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
              <hr/>
              <Review product={product}/>
            </div>
          </div>
        )}
      </div>
    );
}