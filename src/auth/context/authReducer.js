import { types } from "./";

export const authReducer = (state, action) => {

    const { payload } = action;
  
    switch (action.type) {

        case types.checkingCredentials:
            
            return {
                ...state,
                status: 'checking'
            }
        case types.login:
            
            return {
                ...state,
                status: 'authenticated',
                errorMessage: null,
                c_id: payload.uid,
                message: null
            }

        case types.register:
            
            return {
                ...state,
                status: 'authenticated',
                errorMessage: null,
                c_id: payload.uid,
                message: null
            }
        // case types.dataUser:
            
        //     return {
        //         ...state,
        //         user: payload
        //     }

        case types.logout:
            
            return {
                ...state,
                status: 'not-authenticated',
                errorMessage: null,
                c_id: null,
                user: null,
                message: null
            }

        case types.errorLogin:
            
            return {
                ...state,
                status: 'not-authenticated',
                errorMessage: payload?.errorMessage || null,
                message: null
            }
    
        default:
            return state;
    }
}
