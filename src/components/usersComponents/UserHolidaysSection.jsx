
export const UserHolidaysSection = ({ totalDaysOfHolydays , daysOfHolidaysLeft }) => {
    return (
        <>
            <div className="total-holidays flex-center">
            <div className="data-box flex-center">{ totalDaysOfHolydays }</div>
            <p className="textData">Días totales de vacaciones</p>
            </div>
            <div className="left-holidays flex-center">
            <div className="data-box flex-center">{ daysOfHolidaysLeft }</div>
            <p className="textData">Días restantes vacaciones</p>
            </div>
        </>
    )
}
