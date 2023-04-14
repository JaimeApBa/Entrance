import { useContext } from "react";
import { EntranceContext } from "../../entrance";
import { entranceApi } from "../../api";
import Swal from "sweetalert2";


export const useGetDataCalendarCompany = () => {

    const { setDataCalendarCompany } = useContext(EntranceContext);

    
    
    const getCalendarDataCompany = async ( id ) => {

        try {
            const { data } = await entranceApi.get( '/calendar-company/' + id);

            const { ok } = data;

            if(!ok) {
                const { msg } = data;
                
            
                Swal.fire({
                    icon: 'info',
                    title: 'Espera un momento...',
                    text: msg,
                  });
            }

            const { calendarCompany } = data;
            
            setDataCalendarCompany(calendarCompany);
            
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
        getCalendarDataCompany
    };
}
