import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

export default function Cart() {
    const cartReducerState = useSelector(state=> state.cartReducer)
    const {cartItems} = cartReducerState
  return (
    <div>
        <h1>Cart</h1>
    </div>
  )
}
