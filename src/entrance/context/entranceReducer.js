import { entranceTypes } from "./";

export const entranceReducer = ( state, action ) => {

    const { payload } = action;
    
    switch (action.type) {

        case entranceTypes.dataUser:
            
            return {
                ...state,
                user: payload
            }
    
        case entranceTypes.dataCompany:
            
            return {
                ...state,
                company: payload
            }
    
        default:
            return state;
    }
  
    
}
