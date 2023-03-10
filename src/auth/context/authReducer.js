import { types } from "./";

export const authReducer = (state, action) => {
  
    switch (action.type) {

        case types.checkingCredentials:
            
            return {
                ...state,
                status: 'checking' 
            }
        case types.login:
            
            return {
                ...state,
                status: 'authenticated' 
            }

        case types.logout:
            
            return {
                ...state,
                status: 'not-authenticated' 
            }
    
        default:
            return state;
    }
}
