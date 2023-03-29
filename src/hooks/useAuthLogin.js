import { useContext } from "react";
import { AuthContext } from "../auth";
import { entranceApi } from "../api";

export const useAuthLogin = () => {

    const { onChecking, loginWithCredentials, errorLogin, company, email, status } = useContext(AuthContext);
    
    const startLogin = async( { email, password } ) => {
        
        onChecking();
        
        try {

            const resp = await entranceApi.post( '/auth/login', { email, password } );

            const { uid, isAdmin, token, userEmail, company } = resp.data;
            
            localStorage.setItem( 'token', token );
            
            loginWithCredentials(uid, isAdmin, userEmail, company);
             

        } catch (error) {
           console.log(error);
            const { msg } = error.response.data;
            
            errorLogin({ errorMessage: msg })
        }
    }

    return {
        startLogin, 
        company, 
        email,
        status
    }

}
