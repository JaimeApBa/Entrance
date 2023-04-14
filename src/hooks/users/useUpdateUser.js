import { useContext } from "react";
import { EntranceContext } from "../../entrance";
import { entranceApi } from "../../api";
import Swal from "sweetalert2";

export const useUpdateUser = () => {
    
    const { setDataUser } = useContext(EntranceContext);

    const updateDataUser = async ( user ) => {

        try {

            const { data } = await entranceApi.put( `/data-user/${user._id}`, { ...user }  );
            
            const { msg } = data;
        
            Swal.fire({
              icon: 'success',
              text: msg,
            })
            
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
    updateDataUser
  }
}
