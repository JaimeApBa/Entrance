import { useEffect, useState } from "react";
import { months, weekDays } from "../dataCalendar";
import { useCalendar } from "../hooks";

export const Calendar = () => {
    const date = new Date();
    const fullYear = date.getFullYear();

    const [initCalendar, setInitCalendar] = useState();
    const [year, setYear] = useState(fullYear);

    useEffect(() => {
      setYear(fullYear);
    }, [fullYear]);
    
    useEffect(() => {
        const days = useCalendar(year);
        setInitCalendar(days);
    }, [year]);
    
    return (
        <div className='calendar'>
            <div className="counterWrap mb-30">
            <div className="counter decrement flex-center" onClick={ () => setYear(year - 1) }>
                <span>-</span>
            </div>
            <div className="counterData flex-center">
                <span>{ year }</span>                  
            </div>
            <div className="counter increment flex-center" onClick={ () => setYear(year + 1) }>
                <span>+</span>
            </div>
        </div>

        <div className="calendarWrap">

            {
                months.map( (nameOfTheMonth, indexOfMonth ) => (
                    <div key={ indexOfMonth * Math.random() } className="calendar-month flex-center">
                        <ul >
                            <li className="month-name">{ nameOfTheMonth }</li>
                        </ul>

                        <ul className="weekdays">
                            {
                                weekDays.map( ( weekday, index ) => (
                                    <li key={ index * Math.random() } className={ weekday }>{ weekday.substring(0,2) }</li>
                                ))
                            }
                        </ul>
                        
                        {
                            (initCalendar && initCalendar[indexOfMonth]) &&
                                initCalendar[indexOfMonth].map( ( week, index ) => (
                                    <ul key={ index * Math.random() }  className="calendar-week">
                                        {
                                            (week) &&
                                                week.map(( day, index ) => (
                                                    (day !== null) 
                                                    ? (<li key={ index * Math.random() } >{ day }</li>)
                                                    : (<li key={ index * Math.random() }></li>)
                                                ))
                                        }
                                    </ul>
                                ))

                        }

                    </div>
                ))

            }
        </div>



        </div>
    )
}
