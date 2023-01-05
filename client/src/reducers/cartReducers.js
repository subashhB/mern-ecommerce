export const cartReducer = (state={cartItems: []}, action)=>{
    switch(action.type){
        case 'ADD_TO_CART': 
        const alreadyExists = state.cartItems.find((item) => item._id === action.payload._id)
        if(alreadyExists){
            return{
                ...state,
                cartItems: state.cartItems.map((item) => item._id === action.payload._id ? action.payload : item)
            }
        }
        else{
            return{
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }

        case 'DELETE_FROM_CART': 
            const cartAfterDelete = state.cartItems.filter((item) => item._id !== action.payload._id) 
            return{
                ...state,
                cartItems: cartAfterDelete
            };
            
        
        default: return state
    }
}