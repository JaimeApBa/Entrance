import { useContext } from "react";
import { EntranceContext } from "../../entrance";
import { entranceApi } from "../../api";
import Swal from "sweetalert2";

export const useSetDataCalendarCompany = () => {

    const { company, setDataCalendarCompany } = useContext(EntranceContext);


    const setNewDataCalendarCompany = async ( dataCalendar ) => {
        
        try {

            const { data } = await entranceApi.post( '/calendar-company', { ...dataCalendar });
            
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
        setNewDataCalendarCompany
    }
}
