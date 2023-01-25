import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Product from '../components/Product';
import { useDispatch , useSelector} from 'react-redux';
import { getAllProductsReducer } from '../reducers/productReducers';
import { getAllProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Error from '../components/Error';

export default function Homescreen() {
    const getAllProductsState = useSelector(state=>state.getAllProductsReducer)
    const {loading, products, error} = getAllProductsState
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllProducts());
    }, [])
    return(
        <div>
            <div className="row justify-content-center">
                {loading ? (
                    <Loader/>
                ): error? (
                    <Error error="Something went Wrong..."/>
                ): (
                    products.map(product=>{
                        return <div className='col-md-3 m-5 card p-2' key={product._id}>
                            <Product product={product}/>
                        </div>
                    })
                )}
            </div>
        </div>
    )   
}