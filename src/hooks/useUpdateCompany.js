import { entranceApi } from "../api";
import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import { EntranceContext } from "../entrance";

export const useUpdateCompany = () => {

    const { setDataCompany } = useContext(EntranceContext);

    const updateCompany = async ( _id, address, image  ) => {
        
        try {
            
            const resp = await entranceApi.put( `/company/${_id}`, { address, image }  );
            
            const { dataUpdated, msg } = resp.data;
            
            setDataCompany(dataUpdated);

            Swal.fire({
                icon: 'success',
                text: msg,
              })

        } catch (error) {
            console.log(error);
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
        updateCompany
    }
}
