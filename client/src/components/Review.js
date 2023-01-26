import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductReview } from '../actions/productActions';

export default function Review({product}) {
    const [comment, setComment] = useState("")
    const dispatch = useDispatch();
    const sendReview =()=>{
        if(localStorage.getItem('currentUser')){
          const currentUser = JSON.parse(localStorage.getItem('currentUser'))
          var alreadyReviewed;
          for(var i=0; i<product.reviews.length; i++){
            if(product.reviews[i].userId == currentUser._id){
              alreadyReviewed = true
            }
          }
          if(alreadyReviewed){
            alert('You have already reviewed this product.')
          }
          else{
            const review ={comment:comment}
            dispatch(addProductReview(review, product._id))
          }  
        }
        else{
          window.location.href = '/login';
        }
    }
  return (
    <div>
        <h3>Give Your Rating</h3>
        <input type="text" className="form-control mt-3" value={comment} onChange={(e)=>setComment(e.target.value)} />
        <button className='btn w-25 btn-dark mt-1 float-center' onClick={sendReview}>Submit</button>
        <h3 className='mt-3'>Latest Reviews</h3>
        {product.reviews &&(product.reviews.map(review =>{
          return <div>
            <p>{review.comment}</p>
            <p>By: {review.name}</p>
            <hr/>
          </div>
        }))}
    </div>
  )
}
