export const registerNewUserReducer = (state={}, action)=>{
    switch(action.type){
        case 'USER_REGISTER_REQUEST': return{
            ...state,
            loading: true
        }

        case 'USER_REGISTER_SUCCESS': return {
            ...state,
            loading: false,
            success: true
        }
        
        case 'USER_REGISTER_FAILED': return{
            ...state,
            loading: false,
            error: true
        }

        default: state
    }

}