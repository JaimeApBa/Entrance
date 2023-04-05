import { useContext, useEffect, useState } from "react"
import { useDataCalendarCompany, useGetDataCalendarCompany, useGetUsers } from "../../hooks"
import { EntranceContext } from "../../entrance";
import save from '../../assets/check.png';
import cancel from '../../assets/cancel.png';
import pencil from '../../assets/pencil.png';

export const CompanyData = () => {
    
    const { user, company, totalUsers, dataCalendar } = useContext(EntranceContext);

    const [edit, setEdit] = useState(false);
    const [totalDaysOfHolidays, setTotalDaysOfHolidays] = useState('');
    const [annualWorkingHours, setAnnualWorkingHours] = useState('');
    const [weeklyWorkingHours, setWeeklyWorkingHours] = useState('');
    const [prevData, setPrevData] = useState({});

    const { _id } = company;

    const { getCalendarDataCompany } = useGetDataCalendarCompany();

    const { dataCalendarCompany } = useDataCalendarCompany();

    const { isAdmin } = user;

    useEffect(() => {
        getCalendarDataCompany(_id);

    }, []);

    useEffect(() => {
     if(dataCalendar) {
            setAnnualWorkingHours(dataCalendar.annualWorkingHours);
            setTotalDaysOfHolidays(dataCalendar.totalDaysOfHolidays);
            setWeeklyWorkingHours(dataCalendar.weeklyWorkingHours);
        }
    }, [dataCalendar]);
    


    const editDataCalendar = () => {

        setEdit(true);

        const inputs = document.querySelectorAll('input');

        inputs.forEach( input => {
            input.readOnly = false;
            input.style.background = 'hsl(0, 0%, 85%)';
            input.style.borderBottom = '1px solid gray';

            setPrevData( prev => ({
                ...prev,
                [input.name]: input.value
            }))
        });

    }

    const cancelEdit = () => {

        const inputs = document.querySelectorAll('input');
    
        inputs.forEach( input => {
            input.readOnly = true;
            input.style.background = 'none';
            input.style.borderBottom = 'none';
            
            if( input.name === "annualWorkingHours") setAnnualWorkingHours(prevData.annualWorkingHours);
            if( input.name === "totalDaysOfHolidays") setTotalDaysOfHolidays(prevData.totalDaysOfHolidays);
            if( input.name === "weeklyWorkingHours") setWeeklyWorkingHours(prevData.weeklyWorkingHours);
        });
        
        setEdit(false);
    }

    const onSubmit = () => {
        const year = new Date().getFullYear();
        
        dataCalendarCompany({
            companyId: _id,
            year,
            totalDaysOfHolidays,
            annualWorkingHours,
            weeklyWorkingHours,
            bankHolidays: [],
            workingHours: [],

        });

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
                        
                        ( annualWorkingHours !== '' )
                            ? ( <input type="number"
                                        min="0"
                                        name="annualWorkingHours"
                                        className="annualWorkingHours"
                                        value={ annualWorkingHours }
                                        onChange={ (e) => setAnnualWorkingHours(e.target.value) }
                                        readOnly
                                />)
                            : ( <input  type="number" 
                                        name="annualWorkingHours"
                                        className="annualWorkingHours"
                                        min="0"
                                        value={ "0" }
                                        onChange={ (e) => setAnnualWorkingHours(e.target.value) }
                                        readOnly
                                />)
                    }
                </li>
                <li>Días de vacaciones anuales:
                    {
                        ( totalDaysOfHolidays !== '' )
                            ? ( <input  type="number"
                                        min="0"
                                        name="totalDaysOfHolidays"
                                        className="totalDaysOfHolidays"
                                        value={ totalDaysOfHolidays }
                                        onChange={ (e) => setTotalDaysOfHolidays(e.target.value) }
                                        readOnly />)
                            : ( <input  type="number"
                                        name="totalDaysOfHolidays"
                                        className="totalDaysOfHolidays"
                                        min="0"
                                        value={ "0" }
                                        onChange={ (e) => setTotalDaysOfHolidays(e.target.value) }
                                        readOnly />)
                    }
                </li>
                <li>Horas de trabajo semanal:
                    {
                        ( weeklyWorkingHours !== '' )
                            ? ( <input  type="number"
                                        min="0"
                                        name="weeklyWorkingHours"
                                        className="weeklyWorkingHours"
                                        value={ weeklyWorkingHours }
                                        onChange={ (e) => setWeeklyWorkingHours(e.target.value) }
                                        readOnly />)
                            : ( <input  type="number"
                                        className="weeklyWorkingHours"
                                        name="weeklyWorkingHours"
                                        min="0"
                                        value={ "0" }
                                        onChange={ (e) => setWeeklyWorkingHours(e.target.value) }
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
                            <img className="icon-save" src={ save } alt="icono de editar" width="15" onClick={ onSubmit }/>
                            <img className="icon-cancel" src={ cancel } alt="icono de editar" width="15" onClick={ cancelEdit }/>
                        </div>
                        )
            }
                
        
        </section>
    )
}
