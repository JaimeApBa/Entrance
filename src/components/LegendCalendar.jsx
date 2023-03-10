
export const LegendCalendar = () => {
    return (
        <>
            <div className="legend">
                <p className="legend-block bank-holidays flex-center">
                    <span className="color-block">Festivos</span>
                </p>
                <p className="legend-block fault flex-center">
                    <span className="color-block">Baja</span>
                </p>
                <p className="legend-block justified-fault flex-center">
                    <span className="color-block">Falta justificada</span>
                </p>
                <p className="legend-block not-justified-fault flex-center">
                    <span className="color-block">Falta no justificada</span>
                </p>
                <p className="legend-block holidays flex-center">
                    <span className="color-block">Vacaciones</span>
                </p>
            </div>
        
        </>
    )
}
