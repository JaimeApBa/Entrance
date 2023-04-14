import { weekDays } from "../../dataCalendar";

export const useWeekConstructor = (calendarWeek, dayOfWeek, numberOfDay) => {
        
        if(dayOfWeek === 0) {
            calendarWeek[weekDays.length - 1] = numberOfDay;
        } else if(!!calendarWeek[weekDays.length - 1] || numberOfDay < calendarWeek[dayOfWeek - 2]){
            calendarWeek = Array(weekDays.length).fill(null);
            calendarWeek[dayOfWeek - 1] = numberOfDay;
        } else{
            calendarWeek[dayOfWeek - 1] = numberOfDay;
        }
        
        return calendarWeek;
    
}
