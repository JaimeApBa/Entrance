import { useContext } from "react";
import { entranceApi } from "../api";
import { AuthContext } from "../auth";
import { EntranceContext } from "../entrance";

export const useDataUser = () => {

    const { c_id, logout } = useContext(AuthContext);

    const { setDataUser } = useContext(EntranceContext);

    const dataUser = async () => {

        try {
            const resp = await entranceApi.get( '/data-user/' + c_id );
            
            const { user } = resp.data;
            
            setDataUser( user );

        } catch (error) {
            console.log(error);
            logout();
        }

    }

    return {
        dataUser
    };
  
}
