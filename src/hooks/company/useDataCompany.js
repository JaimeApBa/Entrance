import { useContext } from "react";
import { entranceApi } from "../../api";
import { EntranceContext } from "../../entrance";
import Swal from "sweetalert2";

export const useDataCompany = () => {

    const { setDataCompany } = useContext(EntranceContext);

    const dataCompany = async ( companyName ) => {
        
        if(companyName) {

            try {
                const resp = await entranceApi.post( '/company', { companyName } );
                
                const { company } = resp.data;
                
                setDataCompany( company );
    
            } catch (error) {
                console.log(error);

                const { msg } = error.response.data;
                
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: msg,
                  });
            }
    
        }

    }


    return {
        dataCompany
    }
}
