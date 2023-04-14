import { useContext, useEffect, useState } from "react"
import { useGetDataCalendarCompany, useSetDataCalendarCompany, useUpdateDataCalendarCompany } from "../../hooks"
import { EntranceContext } from "../../entrance";
import save from '../../assets/check.png';
import cancel from '../../assets/cancel.png';
import pencil from '../../assets/pencil.png';
import { cancelData, editData } from "../../helpers";

export const CompanyData = () => {
    
    const { user, company, totalUsers, dataCalendar } = useContext(EntranceContext);

    const [edit, setEdit] = useState(false);
    const [prevData, setPrevData] = useState({});
    const [dataCompany, setDataCompany] = useState({
        totalDaysOfHolidays: '',
        annualWorkingHours: '',
        weeklyWorkingHours: ''
    })

    const { updateDataCalendarCompany } = useUpdateDataCalendarCompany();

    const { setNewDataCalendarCompany } = useSetDataCalendarCompany();

    const { isAdmin } = user;

    const inputs = document.querySelectorAll('input');

    useEffect(() => {
     if(dataCalendar) {
            setDataCompany(dataCalendar);
            setPrevData(dataCalendar);
        }
    }, [dataCalendar]);
    
    const handleChange = ({ target: { name, value }}) => {
      
        setDataCompany({
          ...dataCompany,
          [name]: value
        })
  
      }

    const editDataCalendar = () => {

        setEdit(true);

        editData(inputs);

    }

    const cancelEdit = () => {

        cancelData(inputs);

        setDataCompany(prevData);
        
        setEdit(false);
    }

    const onSave = () => {

        const year = new Date().getFullYear();

        const { totalDaysOfHolidays, annualWorkingHours, weeklyWorkingHours } = dataCompany;

        if (dataCalendar) {
            
            updateDataCalendarCompany({
                companyId: _id,
                year,
                totalDaysOfHolidays,
                annualWorkingHours,
                weeklyWorkingHours,
                bankHolidays: [],
                workingHours: []
            });

        } else {

            setNewDataCalendarCompany({
                    companyId: _id,
                    year,
                    totalDaysOfHolidays,
                    annualWorkingHours,
                    weeklyWorkingHours,
                    bankHolidays: [],
                    workingHours: []
            });
        }
        

        cancelEdit();
        
    }

    return (
        <section className="container-company-data">
            <ul className="company-data">
                <li>Número total de trabajadores: 
                    {
                        (totalUsers) ? ` ${ totalUsers.length }` : ' 0'
                    }
                </li>
                <li>Horas de trabajo anuales:
                    {
                        
                        ( dataCompany.annualWorkingHours !== '' )
                            ? ( <input type="number"
                                        min="0"
                                        name="annualWorkingHours"
                                        className="annualWorkingHours"
                                        value={ dataCompany.annualWorkingHours }
                                        onChange={ handleChange }
                                        readOnly
                                />)
                            : ( <input  type="number" 
                                        name="annualWorkingHours"
                                        className="annualWorkingHours"
                                        min="0"
                                        value={ "0" }
                                        onChange={ handleChange }
                                        readOnly
                                />)
                    }
                </li>
                <li>Días de vacaciones anuales:
                    {
                        ( dataCompany.totalDaysOfHolidays !== '' )
                            ? ( <input  type="number"
                                        min="0"
                                        name="totalDaysOfHolidays"
                                        className="totalDaysOfHolidays"
                                        value={ dataCompany.totalDaysOfHolidays }
                                        onChange={ handleChange }
                                        readOnly />)
                            : ( <input  type="number"
                                        name="totalDaysOfHolidays"
                                        className="totalDaysOfHolidays"
                                        min="0"
                                        value={ "0" }
                                        onChange={ handleChange }
                                        readOnly />)
                    }
                </li>
                <li>Horas de trabajo semanal:
                    {
                        ( dataCompany.weeklyWorkingHours !== '' )
                            ? ( <input  type="number"
                                        min="0"
                                        name="weeklyWorkingHours"
                                        className="weeklyWorkingHours"
                                        value={ dataCompany.weeklyWorkingHours }
                                        onChange={ handleChange }
                                        readOnly />)
                            : ( <input  type="number"
                                        className="weeklyWorkingHours"
                                        name="weeklyWorkingHours"
                                        min="0"
                                        value={ "0" }
                                        onChange={ handleChange }
                                        readOnly />)
                    }
                </li>
            </ul>
            {
                ( isAdmin && !edit ) 
                    && ( <img className="icon-pencil" src={ pencil } alt="icono de editar" width="15" onClick={ editDataCalendar } /> )    
            }
            {
                ( isAdmin && edit ) 
                    && ( 
                        <div className="icons">
                            <img className="icon-save" src={ save } alt="icono de editar" width="15" onClick={ onSave }/>
                            <img className="icon-cancel" src={ cancel } alt="icono de editar" width="15" onClick={ cancelEdit }/>
                        </div>
                        )
            }
                
        
        </section>
    )
}
