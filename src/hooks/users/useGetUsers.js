import { useContext } from "react";
import { entranceApi } from "../../api";
import { EntranceContext } from "../../entrance";
import Swal from "sweetalert2";

export const useGetUsers = () => {
    
    const { company, setUsersCompany } = useContext(EntranceContext);
    
    const { name } = company || {};
    
    const getAllUsers = async () => {

        try {
            const { data } = await entranceApi.post( '/data-user', { name });

            const { users } = data;

            setUsersCompany(users);
            
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

    return {
        getAllUsers
    };
}
