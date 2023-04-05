import { useEffect, useState } from "react";
import { months } from '../../dataCalendar';

export const CounterDate = (props) => {
    
    const [counter, setCounter] = useState(0);
    const [month, setMonth] = useState();

    useEffect(() => {
        if(props.date){
            setCounter(props.date);
        } 
    }, []);

    useEffect(() => {
        if(props.numberOfMonth){
            setCounter(props.numberOfMonth);
        } 
    }, []);
    
    useEffect(() => {
        if(props.numberOfMonth){
            setMonth(months[counter])
        } 
    }, [counter]);


    const decrement = () => {
        if(props.numberOfMonth && counter === 0){
            setCounter(11);
        } else setCounter(counter - 1);

    }

    const increment = () => {
        if(props.numberOfMonth && counter === 11){
            setCounter(0);
        } else setCounter(counter + 1);
    }
    
    return (
        <div className="counterWrap">
            <div className="counter decrement flex-center" onClick={ decrement }>
                <span>-</span>
            </div>
            <div className="counterData flex-center">
                {
                    (props.date) 
                        ? <span>{ counter }</span>
                        : <span>{ month }</span>
                }
                  
            </div>
            <div className="counter increment flex-center" onClick={ increment }>
                <span>+</span>
            </div>
        </div>
    )
}
