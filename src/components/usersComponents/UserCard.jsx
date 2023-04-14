import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { EntranceContext } from '../../entrance';
import { useGetUsers, useUpdateUser } from '../../hooks';
import { cancelData, editData, uploadImage } from '../../helpers';
import no_user from '../../assets/user.jpg';
import save from '../../assets/check.png';
import cancel from '../../assets/cancel.png';
import pencil from '../../assets/pencil.png';

export const UserCard = () => {

    const location = useLocation();

    const { totalUsers, user } = useContext(EntranceContext);

    const { updateDataUser } = useUpdateUser();
    const { getAllUsers } = useGetUsers();

    const [edit, setEdit] = useState(false);
    const [prevData, setPrevData] = useState({});
    const [dataUser, setDataUser] = useState({
      name: '',
      lastname: '',
      email: '',
      position: ''
    });
    
    const { pathname } = location;

    const newArrId = pathname.split('/');

    const id = newArrId[newArrId.length - 1];

    const currentUser = totalUsers.filter( user => user._id === id );

    const { isAdmin } = user;

    const inputs = document.querySelectorAll('input');

    useEffect(() => {
      if(currentUser) { 
        setDataUser(currentUser[0]);
        setPrevData(currentUser[0]);
      }
    }, [])
    
    const handleChange = ({ target: { name, value }}) => {
      
      setDataUser({
        ...dataUser,
        [name]: value
      })

    }
    
    const editDataUser = () => {

      setEdit(true);

      editData(inputs);
    }

    const cancelEdit = () => {
    
      cancelData(inputs);

      setDataUser(prevData);
      
      setEdit(false);
    }

    const onSave = () => {

      updateDataUser(dataUser);

      getAllUsers();
    
      cancelData(inputs);

      setEdit(false);
      
    }

    return (
      <section className="container-user">
        <div className='userCard'>
          <figure className="card-header">
            <img className='card-logo' 
                  src={ dataUser.photo ? dataUser.photo : no_user } 
                  alt="Foto del usuario" 
                  width="150px" 
                  height="125px"
            />
            {
                ( isAdmin && edit ) && <figcaption onClick={ uploadImage }>Subir imagen</figcaption>
            } 
          </figure>
          <div className="card-body">
            <small className='label-gray'>Nombre</small>
            <input className="card-text"
                    type='text'
                    name='name'
                    value={ dataUser.name }
                    onChange={ handleChange }
                    readOnly
            />
            <small className='label-gray'>Apellidos</small>
            <input className="card-text"
                    type='text'
                    name='lastname'
                    value={ dataUser.lastname }
                    onChange={ handleChange }
                    readOnly
            />
            <small className='label-gray'>Email</small>
            <input className="card-text"
                    type='email'
                    name='email'
                    value={ dataUser.email }
                    onChange={ handleChange }
                    readOnly
            />
            <small className='label-gray'>Posición</small>
            <input className="card-text"
                    type='text'
                    name='position'
                    value={ dataUser.position }
                    onChange={ handleChange }
                    readOnly
            />
          </div>
        </div>
        {
                ( isAdmin && !edit ) 
                    && ( <img className="icon-pencil"
                              src={ pencil } 
                              alt="icono de editar" 
                              width="15" 
                              onClick={ editDataUser }
                          /> )    
            }
            {
                ( isAdmin && edit ) 
                    && ( 
                        <div className="icons">
                            <img className="icon-save" 
                                  src={ save } 
                                  alt="icono de editar" 
                                  width="15" 
                                  onClick={ onSave }/>
                            <img className="icon-cancel" 
                                  src={ cancel } 
                                  alt="icono de editar" 
                                  width="15" 
                                  onClick={ cancelEdit }
                            />
                        </div>
                        )
            }
      </section>
      
    )
}
