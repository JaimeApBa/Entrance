import { useContext, useEffect } from "react";
import { EntranceContext } from "../../entrance";
import { useGetUsers } from "../../hooks";
import no_user from '../../assets/user.jpg';

export const CompanyUsers = () => {

    const { user, totalUsers } = useContext(EntranceContext);
    
    const { isAdmin } = user;

    const { getAllUsers } = useGetUsers();

    useEffect(() => {
        getAllUsers();
    }, []);


    return (
        <section className="companyUsers">
            {
                ( isAdmin ) &&
                    ( <p className="newAdmin btnUser">Nuevo Administrador Entrance</p> )
            }
            {
                ( totalUsers ) &&
                    totalUsers.map( user => (
                        <div className="user-btn btnUser" key={ user._id } style={ user.isAdmin ? { border: '2px solid hsl(0, 100%, 50%)' } : { border: '2px solid hsl(223, 73%, 35%)' } }>
                            <img className="no_user" src={ no_user } alt="Imagen usuario" width="115px" height="95px" />
                            <div className="user-data">
                                <p className="username">{ user.name } { user.lastname }</p>
                                <p className="user-position">{ user.position }</p>
                            </div>
                        </div> 
                    ))
            }
        </section>
    )
}
