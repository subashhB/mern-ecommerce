import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart , deleteFromCart} from '../actions/cartActions'

export default function Cart() {
    const cartReducerState = useSelector(state=> state.cartReducer)
    const dispatch = useDispatch()
    const {cartItems} = cartReducerState

    var subtotal = cartItems.reduce((acc, item) => acc + (item.price*item.quantity), 0)
    useEffect(() => {
      if(!localStorage.getItem('currentUser')){
        window.location.href ='/login';
      }
    }, [])
    
    

  return (
    <div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-8 card">
            <h1 className='text-center m-3'>CART</h1>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                  {cartItems.map(item =>{
                    return <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td><select value={item.quantity} onChange={(e)=>{dispatch(addToCart(item, e.target.value))}}>
                        {[...Array(item.countInStock).keys()].map((x, i)=>{
                          return <option key={i} value={i+1}>{i+1}</option>;
                        })}
                        </select></td>
                      <td>{item.price * item.quantity}</td>
                      <td><i className=' fa fa-trash-alt' onClick={()=>{dispatch(deleteFromCart(item))}}></i></td>
                    </tr>
                  })}
              </tbody>
            </table>
            <h3 className='text-center' >Total: Rs. {subtotal}/-</h3>
            <hr/>
            <div className='text-center mb-3'>
              <button className='btn btn-dark' style={{width:'200px', alignItems:'center'}}>Pay</button>
            </div>
          </div>
        </div>
    </div>
  )
}
