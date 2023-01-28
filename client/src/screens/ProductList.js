import React, { useState , useEffect} from 'react'
import { getAllUsersReducer } from '../reducers/userReducers';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Error from '../components/Error';

export default function ProductList() {
  const getAllProductState = useSelector(state => state.getAllProductsReducer)
    const {products, loading, error} = getAllProductState;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProducts())
    }, [])
  return (
    <div>
      <h3>Products List</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>ID</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map(product=>{
            return(
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.countInStock}</td>
                <td>{product._id}</td>
                <td><i className='fa fa-trash' onClick={()=>dispatch(deleteProduct(product._id))}></i></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {loading && (<Loader/>)}
      {error && (<Error/>)}
    </div>
  )
}
