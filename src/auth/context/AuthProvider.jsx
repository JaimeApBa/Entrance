import { useReducer } from "react";
import { AuthContext, authReducer, types } from "./";

const initValues = {
    status: 'checking',
    email: null,
    password: null,
    company: null
}

export const AuthProvider = ({ children }) => {

    const [AuthState, dispatch] = useReducer(authReducer, initValues);


    const loginWithCredentials = async ({ email, password }) => {
        const action = {
            type: types.login,
        }
        dispatch(action);
    }

    const registerWithCredentials = ({ email, password, company }) => {
        
        const action = {
            type: types.register,
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
                loginWithCredentials,
                registerWithCredentials,
                logout
           } }
        >
            { children }
        </AuthContext.Provider>
    )
}
