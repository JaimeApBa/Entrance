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

    const setDataUser = ( user ) => {
        
        const action = {
            type: entranceTypes.dataUser,
            payload: user
        }
        dispatch(action);
    }

    const setDataCompany = ( company ) => {
        
        const action = {
            type: entranceTypes.dataCompany,
            payload: company
        }
        dispatch(action);
    }

    return (
        <EntranceContext.Provider 
            value={{
                ...entranceState,
                setDataUser,
                setDataCompany
            }}>
            { children }
        </EntranceContext.Provider>
    )
}
