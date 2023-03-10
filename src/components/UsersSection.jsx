import { Link } from "react-router-dom";

export const UsersSection = ({ name, logo }) => {
  return (
    <div className="user-section">
        <img className="logo" src={ logo } alt="Foto usuario" />
        <p>
            <Link to=''>{ name }</Link>
        </p>
    </div>
  )
}
