import { useContext, useState } from "react";
import { EntranceContext } from "../../entrance";
import { useUpdateCompany } from "../../hooks";
import { uploadImage } from "../../helpers";
import noImage from '../../assets/no-image.jpg';
import pencil from '../../assets/pencil.png';
import Swal from "sweetalert2";

export const CompanySection = () => {

    const [display, setDisplay] = useState(false);
    
    const { company, user } = useContext(EntranceContext);

    const { _id, image, address: { ...address }, name } = company;
    const { street, number, floor, door, postalcode, city } = address;
    const { isAdmin } = user;

    const { updateCompany } = useUpdateCompany();

    const toggleModal = () => {
        setDisplay(!display);
    }  
    
    const editAddress = async () => {
        
        const { value: formValues } = await Swal.fire({
            title: 'Datos de la empresa',
            html:
                `<label class="label-swal">Dirección</label><input type="text" id="swal-input1" class="swal2-input" value="${street || ''}">` +
                `<label class="label-swal">Número</label><input type="text" id="swal-input2" class="swal2-input" value="${number || ''}">` +
                `<label class="label-swal">Piso</label><input type="text" id="swal-input3" class="swal2-input" value="${floor || ''}">` +
                `<label class="label-swal">Puerta</label><input type="text" id="swal-input4" class="swal2-input" value="${door || ''}">` +
                `<label class="label-swal">Código Postal</label><input type="text" id="swal-input5" class="swal2-input" value="${postalcode || ''}">`+
                `<label class="label-swal">Ciudad</label><input type="text" id="swal-input6" class="swal2-input" value="${city || ''}">`,
            focusConfirm: false,
            customClass: 'swal-container',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `Cancelar`,
            confirmButtonColor: 'hsl(133, 100%, 37%)',
            preConfirm: () => {
                return {
                    address: {
                        street: document.getElementById('swal-input1').value,
                        number: document.getElementById('swal-input2').value,
                        floor: document.getElementById('swal-input3').value,
                        door: document.getElementById('swal-input4').value,
                        postalcode: document.getElementById('swal-input5').value,
                        city: document.getElementById('swal-input6').value
                    }
                }   
            }
        });
                    
        
        if(formValues) {
            updateCompany( _id, formValues.address, image );
        }

    }

    
    return (
        <section className="company-section">
           
            <figure>
                <img className="logo" src={ image || noImage } alt="Foto usuario" />
                {
                    ( isAdmin ) && <figcaption onClick={ uploadImage }>Subir imagen</figcaption>
                }  
            </figure>

            <p className="company-name" onClick={ toggleModal }>{ name }</p>

            <div className="detailsContainer" style={{'display': `${ display ? 'block' : 'none' }`}}>
                <div className="details">
                    <p className="close-dialog" onClick={ toggleModal }>x</p>
                    <div className="arrow"></div>
                    <div className="address-details">
                        {
                            ( address && address.street )
                                ? (<p className="address">
                                        { street }, { number }
                                        <br />
                                        { floor } - { door }
                                        <br />
                                        { postalcode }, { city }
                                    </p>)
                                : <p className="no-address">No hay dirección</p>
                        }
                    
                    {
                        ( isAdmin )  && 
                            (<span>
                                <img className="icon-pencil" src={ pencil } alt="icono de editar" width="15" onClick={ editAddress } />
                            </span>)
                    }
                    </div>
                </div>
            </div>
            
        </section>
    )
}
