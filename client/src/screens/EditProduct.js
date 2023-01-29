import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../actions/productActions';
import { getProductByIdReducer } from '../reducers/productReducers';
import { useState, useEffect } from 'react';

export default function EditProduct({match}) {
    let {id:productId} = useParams();
    const dispatch = useDispatch();
    const productState = useSelector(state=> state.getProductByIdReducer)
    const {product, loading, error} = productState
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [countInStock, setCountInStock] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if(product){
            if(product._id == productId){
                setName(product.name)
                setPrice(product.price)
                setCountInStock(product.countInStock)
                setImageUrl(product.image)
                setCategory(product.category)
                setDescription(product.description)
            }
            else{
                dispatch(getProductById(productId))
            }
            
        }
        else{
            dispatch(getProductById(productId))
        }
        
      }, [dispatch, product])
    const editProduct = ()=>{

    }
    
    
    
  return (
    <div>
        <h3>{productId}</h3>
        {product && (
            <div>
                <form onSubmit={editProduct}>
                    <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Product Name' required value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Price' required value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Description' required value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                    <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Image URL' required value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}}/>
                    <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Category' required value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                    <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Count In Stock' required value={countInStock} onChange={(e)=>{setCountInStock(e.target.value)}}/>
                    <button type='submit' className='btn btn-dark mt-3 float-start'>Edit Product</button>
                </form>
            </div>
        )}
    </div>
  )
}
