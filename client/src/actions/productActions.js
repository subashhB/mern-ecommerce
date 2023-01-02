import axios from "axios"

export const getAllProducts =() => dispatch =>{
    dispatch({type:'GET_PRODUCTS_REQUEST'})
    axios.get('/api/products/getallproducts').then(res=>{
        console.log(res)
        dispatch({type:'GET_PRODUCTS_SUCCESS', payload: res.data})
    }).catch(err=>{
        console.log(err)
        dispatch({type:'GET_PRODUCTS_FAILED', payload: err})
    })
}