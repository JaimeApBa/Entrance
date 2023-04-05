import { Link } from "react-router-dom";

export const UsersSection = ({ name, logo, linkTo }) => {
  return (
    <div className="user-section">
        <img className="logo" src={ logo } alt="Foto usuario" />
        <p>
            <Link to={ linkTo }>{ name }</Link>
        </p>
    </div>
  )
}
