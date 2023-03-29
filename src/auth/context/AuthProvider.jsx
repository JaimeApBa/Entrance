import { useReducer } from "react";
import { AuthContext, authReducer, types } from "./";

const initValues = {
    status: 'checking',
    c_id: null,
    message: null,
    errorMessage: null,
    user: null
}

export const AuthProvider = ({ children }) => {

    const [AuthState, dispatch] = useReducer(authReducer, initValues);

    const onChecking = async () => {
        const action = {
            type: types.checkingCredentials
        }
        dispatch(action);
    }

    const loginWithCredentials = async ( uid, isAdmin, email, company ) => {
        
        const action = {
            type: types.login,
            payload: {
                uid, isAdmin, email, company
            }
        }
        dispatch(action);
    }

    const registerWithCredentials = ( uid, email, company, isAdmin ) => {
       
        const action = {
            type: types.register,
            payload: {
                uid,
                email,
                company,
                isAdmin
            }
        }
        dispatch(action);
    }

    const errorLogin = ( msg ) => {
        
        const action = {
            type: types.errorLogin,
            payload: msg
        }
        dispatch(action);
    }

    const logout = () => {
        const action = {
            type: types.logout,
        }
        dispatch(action);
    }

    return (
        <AuthContext.Provider 
            value={{
                ...AuthState,
                onChecking,
                loginWithCredentials,
                registerWithCredentials,
                logout,
                errorLogin
           } }
        >
            { children }
        </AuthContext.Provider>
    )
}
