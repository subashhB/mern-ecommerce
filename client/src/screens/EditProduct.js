import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getProductById, updateProduct } from '../actions/productActions';
import { getProductByIdReducer, updateProductReducer} from '../reducers/productReducers';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';

export default function EditProduct({match}) {
    let {id:productId} = useParams();
    const dispatch = useDispatch();
    const productState = useSelector(state=> state.getProductByIdReducer)
    const {product, loading, error} = productState
    const updateProductState = useSelector(state => state.updateProductReducer)
    const {success, updateerror, updating} = updateProductState
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

    const editProduct = (e)=>{
        e.preventDefault();
        const updatedProduct  = {
            name: name,
            price: price,
            countInStock: countInStock,
            imageUrl: imageUrl,
            category: category,
            description: description
        }
        dispatch(updateProduct(productId, updatedProduct))
    }
    
    
    
  return (
    <div>
        <h3>Edit Product</h3>
        {updating && (<Loader/>)}
        {updateerror && (<Error error='Something went wrong!'/>)}
        {loading && (<Loader/>)}
        {success && (<Success success='Product updated successfully' /> )}
        {error && (<Error error='Something went wrong!'/>)}
        {product && (
            <div>
                
                <form onSubmit={editProduct} key={product._id}>
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
