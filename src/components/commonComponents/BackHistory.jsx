import { useNavigate } from "react-router-dom"

export const BackHistory = () => {

    const navigate = useNavigate();

    const backHistory = () => {
        navigate(-1);
    }
    return (
        <div className="history">
            <span className="backHistory" onClick={ backHistory }>&lt; Volver</span>
        </div>
    )
}
