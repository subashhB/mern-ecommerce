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
            error: 'User Already Registered'
        }

        default: return state
    }

}

export const loginReducer = (state={}, action)=>{
    switch(action.type){
        case 'USER_LOGIN_REQUEST': return{
            ...state,
            loading: true
        }

        case 'USER_LOGIN_SUCCESS': return {
            ...state,
            loading: false,
            success: true
        }
        
        case 'USER_LOGIN_FAILED': return{
            ...state,
            loading: false,
            error: 'Invalid Credentials'
        }
        case 'USER_LOGOUT': return{
            ...state
        }

        default: return state
    }

}

export const updateUserReducer = (state={}, action)=>{
    switch(action.type){
        case 'UPDATE_USER_REQUEST': return{
            ...state,
            loading: true
        }

        case 'UPDATE_USER_SUCCESS': return {
            ...state,
            loading: false,
            success: true
        }
        
        case 'UPDATE_USER_FAILED': return{
            ...state,
            loading: false,
            error: 'Something went Wrong'
        }

        default: return state
    }

}

export const getAllUsersReducer = (state={}, action)=>{
    switch(action.type){
        case 'GET_ALL_USERS_REQUEST': return{
            ...state,
            loading: true
        }

        case 'GET_ALL_USERS_SUCCESS': return {
            ...state,
            loading: false,
            users: action.payload
        }
        
        case 'GET_ALL_USERS_FAILED': return{
            ...state,
            loading: false,
            error: action.payload
        }

        default: return state
    }

}
