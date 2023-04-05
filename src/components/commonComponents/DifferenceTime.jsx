import { useEffect, useState } from "react"

export const DifferenceTime = ({ time }) => {
    
    const [timeFormat, setTimeFormat] = useState();
    time = Number(time).toFixed(2);

    useEffect(() => {
        if(time >= 0) setTimeFormat('+' + time);
        else setTimeFormat(time);
    }, [time])
    
    return (
        <p className="differenceTime flex-center">{ timeFormat }</p>
    )
}
