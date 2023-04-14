import { useContext } from "react";
import { AuthContext } from "../../auth";
import { entranceApi } from "../../api";
import Swal from "sweetalert2";

export const useUpdateAdmin = () => {

    const { updateAdmin } = useContext(AuthContext);

    const updateAdminState = async ( email, isAdmin ) => {
       
        try {

            const resp = await entranceApi.put( `/auth/updateAdmin`, { email, isAdmin }  );
            
            const { dataUpdated } = resp.data;
            
            updateAdmin(dataUpdated);
            
        } catch (error) {
            console.log(error);
            const { msg } = error.response.data;
            
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: msg,
            })
        }
    }

  return {
    updateAdminState
  }
}
