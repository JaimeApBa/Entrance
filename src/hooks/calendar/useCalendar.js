import { weekDays } from "../../dataCalendar";
import { useWeekConstructor } from "./useWeekConstructor";

export const useCalendar = (year) => {

        const firstDayOfTheYear = new Date('January 01,' + year);
        const lastDayOfTheYear = new Date('December 31,' + year);
        let nextDay = new Date(firstDayOfTheYear.getTime() + 24*60*60*1000);
        let calendarWeek = Array(weekDays.length).fill(null);
        let fullCalendar = [];
        let newMonth = [];
       
        for (let i = firstDayOfTheYear; i <= lastDayOfTheYear; i = nextDay)  {
            const next = new Date(i.getTime() + 24*60*60*1000);
            const numberOfMonth = i.getMonth();
            const numberOfDay = i.getDate(); 
            const dayOfWeek = i.getDay();

            calendarWeek = useWeekConstructor(calendarWeek, dayOfWeek, numberOfDay);
                    
            if(!calendarWeek[0] && !!calendarWeek[weekDays.length - 1] ) {
                newMonth = [];
                newMonth.push(calendarWeek);
                
            } else if(calendarWeek.every(el => el !== null) && numberOfMonth === next.getMonth()) {
                newMonth.push(calendarWeek);
                
            } else if(!calendarWeek.every(el => el === null) && numberOfMonth < next.getMonth()) {
                newMonth.push(calendarWeek);
                fullCalendar.push(newMonth);
                newMonth = [];

            } else if(calendarWeek.every(el => el !== null)){
                newMonth.push(calendarWeek);
                fullCalendar.push(newMonth);
                
            } else if (!calendarWeek.every(el => el === null) && numberOfMonth > next.getMonth() && numberOfMonth === 11) {
                newMonth.push(calendarWeek);
                fullCalendar.push(newMonth);
                newMonth = [];
            }
            
            nextDay = next;
              
        }


        return fullCalendar;
    
}
