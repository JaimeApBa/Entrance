import { useContext } from "react";
import { EntranceContext } from "../entrance";
import { entranceApi } from "../api";
import Swal from "sweetalert2";

export const useDataCalendarCompany = () => {

    const { company, setDataCalendarCompany } = useContext(EntranceContext);


    const dataCalendarCompany = async ( dataCalendar ) => {
        
        try {

            const { data } = await entranceApi.put( '/calendar-company', { ...dataCalendar });
            
            setDataCalendarCompany(data);

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
        dataCalendarCompany
    }
}
