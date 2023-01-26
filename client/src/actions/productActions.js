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

export const getProductById =(productId) => dispatch =>{
    dispatch({type:'GET_PRODUCT_BY_ID_REQUEST'})
    axios.post('/api/products/getproductbyid',{productId}).then(res=>{
        console.log("res",res)
        dispatch({type:'GET_PRODUCT_BY_ID_SUCCESS', payload: res.data})
    }).catch(err=>{
        console.log("err", err)
        dispatch({type:'GET_PRODUCT_BY_ID_FAILED', payload: err})
    })
}

export const filterProducts =(searchKey, sort, category)=> dispatch=>{
    var filteredProducts;
    dispatch({type:'GET_PRODUCTS_REQUEST'})
    axios.get('api/products/getallproducts').then(res=>{
        filteredProducts = res.data;
        if(searchKey){
            filteredProducts = res.data.filter((products)=>{return products.name.toLowerCase().includes(searchKey.toLowerCase())})
        }
        if(sort != 'popular'){
            if(sort == 'htl'){
                filteredProducts = res.data.sort((a,b)=>{
                    return -a.price + b.price
                })
            }
            else if(sort == 'lth'){
                filteredProducts = res.data.sort((a,b)=>{
                    return +a.price - b.price
                })
            }
        }
        if(category != 'all'){
            filteredProducts = res.data.filter((products) =>{return products.category.toLowerCase().includes(category)})
        }

        dispatch({type:'GET_PRODUCTS_SUCCESS', payload: filteredProducts})
    })
    .catch(err=>{
        dispatch({type:'GET_PRODUCTS_FAILED', payload: err})
    })
}

export const addProductReview = (review, productId) => (dispatch, getState)=>{
    dispatch({type:'ADD_PRODUCT_REVIEW_REQUEST'})
    const currentUser = getState().loginReducer.currentUser
    axios.post('/api/products/addreview',{review, productId, currentUser}).then(res=>{
        console.log(res);
        dispatch({type:'ADD_PRODUCT_REVIEW_SUCCESS'})
    }).catch(err=>{
        dispatch({type:'ADD_PRODUCT_REVIEW_FAILED'})
    })

}