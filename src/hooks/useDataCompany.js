import { useContext } from "react";
import { entranceApi } from "../api";
import { EntranceContext } from "../entrance";

export const useDataCompany = () => {

    const { setDataCompany } = useContext(EntranceContext);

    const dataCompany = async ( companyName ) => {
        console.log({ companyName });
        try {
            const resp = await entranceApi.post( '/company', { companyName } );
            console.log(resp);
            const { company } = resp.data;
            
            setDataCompany( company );

        } catch (error) {
            console.log(error);
        }

    }

    return {
        dataCompany
    }
}
