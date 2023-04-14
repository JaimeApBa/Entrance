import { useContext } from "react";
import { EntranceContext } from "../../entrance";
import { entranceApi } from "../../api";
import Swal from "sweetalert2";

export const useUpdateDataCalendarCompany = () => {

    const { company, setDataCalendarCompany } = useContext(EntranceContext);


    const updateDataCalendarCompany = async ( dataCalendar ) => {
        
        try {

            const { data } = await entranceApi.put( '/calendar-company', { ...dataCalendar });

            const { updatedData, msg } = data;
            
            setDataCalendarCompany(updatedData);

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
                  });
        }
    }

    return {
        updateDataCalendarCompany
    }
}
