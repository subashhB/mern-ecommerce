import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductReview } from '../actions/productActions';

export default function Review({product}) {
    const [comment, setComment] = useState("")
    const dispatch = useDispatch();
    const sendReview =()=>{
        const review ={comment}
        dispatch(addProductReview(review, product._id))
    }
  return (
    <div>
        <h3>Give Your Rating</h3>
        <input type="text" className="form-control mt-3" value={comment} onChange={(e)=>setComment(e.target.value)} />
        <button className='btn w-25 btn-dark mt-1 float-center' onClick={sendReview}>Submit</button>
    </div>
  )
}
