import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EntranceContext } from "../../entrance";
import { useGetUsers, useUpdateAdmin } from "../../hooks";
import no_user from '../../assets/user.jpg';
import Swal from "sweetalert2";

export const CompanyUsers = () => {

    const { user, totalUsers } = useContext(EntranceContext);
    const [adminUsers, setAdminUsers] = useState([]);
    const [normalUsers, setNormalUsers] = useState([]);
    const [newAdmin, setNewAdmin] = useState(false);

    const navigate = useNavigate();
    
    const { isAdmin } = user;

    const { updateAdminState } = useUpdateAdmin();

    useEffect(() => {
        if(totalUsers) {

            setAdminUsers([]);
            setNormalUsers([]);

            totalUsers.forEach( 
                user => user.isAdmin 
                        ? setAdminUsers(prevUsers => [...prevUsers, user]) 
                        : setNormalUsers(prevUsers => [...prevUsers, user])
                );
        }
    },[totalUsers])


    const selectNewAdmin = () => {
        setNewAdmin(true);

        Swal.fire({
            icon: 'info',
            text: 'Pulsa un usuario añadir o quitar un administrador',
            toast: true,
            position: 'top-end',
            showConfirmButton: true,
            confirmButtonColor: 'hsl(133, 100%, 37%)',
            confirmButtonText: 'Cerrar',
            width: '100%',
            didClose: () => {
                setNewAdmin(false);
            }
        })    

    }

    const handleNewAdmin = ( user ) => ( event ) => {
        event.preventDefault();

        updateAdminState(user.email, !user.isAdmin);

    }

    const selectUser = ( id ) => (event) => {
        event.preventDefault();
        
        navigate(`/user/${id}`);
    }
    return (
        <section className="companyUsers">
            <div className="setionUsers sectionAdmin">
                {
                    ( isAdmin ) &&
                        ( <p className="newAdmin btnUser" onClick={ selectNewAdmin }>Nuevo Administrador Entrance</p> )
                }
                {
                    ( totalUsers && adminUsers ) &&
                        adminUsers.map( user => (
                            <div className="user-btn btnUser" 
                                key={ user._id }
                                style= { { border: '2px solid hsl(0, 100%, 50%)' } } 
                                onClick={ newAdmin ? handleNewAdmin(user) : selectUser(user._id) }
                            >
                                <img className="no_user" src={ no_user } alt="Imagen usuario" width="115px" height="95px" />
                                <div className="user-data">
                                    <p className="username">{ user.name } { user.lastname }</p>
                                    <p className="user-position">{ user.position }</p>
                                </div>
                            </div> 
                        ))
                }
            </div>
            <div className="setionUsers">
                {
                    ( isAdmin ) &&
                        ( <p className="newUser btnUser">Nuevo Usuario</p> )
                }
                {
                    ( totalUsers && normalUsers ) &&
                        normalUsers.map( user => (
                            <div className="user-btn btnUser" 
                                key={ user._id }
                                style={ { border: '2px solid hsl(223, 73%, 35%)' } }
                                onClick={ newAdmin ? handleNewAdmin(user) : selectUser(user._id) }
                            >
                                <img className="no_user" src={ no_user } alt="Imagen usuario" width="115px" height="95px" />
                                <div className="user-data">
                                    <p className="username">{ user.name } { user.lastname }</p>
                                    <p className="user-position">{ user.position }</p>
                                </div>
                            </div> 
                        ))
                }
            </div>
            
            
        </section>
    )
}
