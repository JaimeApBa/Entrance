import { useContext } from "react";
import { AuthContext } from "../auth";
import { entranceApi } from "../api";
import Swal from "sweetalert2";

export const useAuthRegister= () => {

    const { onChecking, registerWithCredentials, errorLogin, company, email, status } = useContext(AuthContext);
    
    const startRegister = async( { email, password, companyName } ) => {
        
        onChecking();
        
        try {

            const resp = await entranceApi.post( '/auth/signup', { email, password, companyName, isAdmin: true } );
            
            const { uid, isAdmin, token, userEmail, company } = resp.data;
            
            localStorage.setItem( 'token', token );
            
            registerWithCredentials(uid, isAdmin, userEmail, company);
             

        } catch (error) {
           
            const { msg } = error.response.data;
            
            errorLogin({ errorMessage: msg });

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: msg,
            })
        }
    }

    return {
        startRegister, 
        company, 
        email,
        status
    }

}
