import { useReducer } from "react";
import { EntranceContext } from "./EntranceContext"
import { entranceReducer } from "./entranceReducer";
import { entranceTypes } from "./entranceTypes";


const initValues = {
    user: null,
    company: null
}

export const EntranceProvider = ( { children } ) => {

    const [entranceState, dispatch] = useReducer(entranceReducer, initValues);

    /* User */

    const setDataUser = ( user ) => {
        
        const action = {
            type: entranceTypes.dataUser,
            payload: user
        }
        dispatch(action);
    }

    /* Company */

    const setDataCompany = ( company ) => {
        
        const action = {
            type: entranceTypes.dataCompany,
            payload: company
        }
        dispatch(action);
    }

    const setUsersCompany = ( users ) => {
        
        const action = {
            type: entranceTypes.usersCompany,
            payload: users
        }
        dispatch(action);
    }

    const setDataCalendarCompany = ( dataCalendar ) => {
        
        const action = {
            type: entranceTypes.dataCalendar,
            payload: dataCalendar
        }
        dispatch(action);
    }

    /* calendar */

    return (
        <EntranceContext.Provider 
            value={{
                ...entranceState,
                setDataUser,
                setDataCompany,
                setUsersCompany,
                setDataCalendarCompany
            }}>
            { children }
        </EntranceContext.Provider>
    )
}
