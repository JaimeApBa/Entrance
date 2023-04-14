import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components";
import { useAuthRegister } from '../../hooks';
import { useForm } from "../../hooks/auth/useForm";
import { registerValidations } from "../validators";



const initialValues = {
  email: '',
  companyName: '',
  password: '',
  name: '',
  lastname: '',
  position: ''
}

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formState, email, companyName, password, name, lastname, position, onInputChange,
          emailValid, companyValid, passwordValid, nameValid, lastnameValid, positionValid, isFormValid} = useForm(initialValues, registerValidations);

  const { startRegister } = useAuthRegister();

  const onSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);
    if(!isFormValid) return;
    
    startRegister(formState);
  }

  return (
    <>
      <header className="headerAuth">
        <Logo />
      </header>

      <form className="auth-container">

          <div className={ (formSubmitted && !!companyValid) ? "field" : "field mb-75" }>
                <input  type="text"
                        className={ (formSubmitted && !!companyValid) ? "input-field error" : "input-field" }
                        placeholder="Compañía"
                        onChange={ onInputChange }
                        name="companyName"
                        value={ companyName }
                        />
              </div>
              {
                (formSubmitted && !!companyValid) 
                    && (<p className="errorMessage">{ companyValid }</p>)
              }

          <div className={ (formSubmitted && !!emailValid) ? "field" : "field mb-75" }>
              <input  type="email"
                      className={ (formSubmitted && !!emailValid) ? "input-field error" : "input-field" }
                      placeholder="Correo Electrónico"
                      onChange={ onInputChange }
                      name="email"
                      value={ email }
                      />
            </div>
            {
              (formSubmitted && !!emailValid) 
                  && (<p className="errorMessage">{ emailValid }</p>)
            }

          <div className={ (formSubmitted && !!passwordValid) ? "field" : "field mb-75" }>
            <input  type="password"
                    className={ (formSubmitted && !!passwordValid) ? "input-field error" : "input-field" }
                    placeholder="Contraseña"
                    onChange={ onInputChange }
                    name="password"
                    value={ password }
                    />
          </div>
          {
            (formSubmitted && !!passwordValid) 
                && (<p className="errorMessage">{ passwordValid }</p>)
          }
          <div className={ (formSubmitted && !!nameValid) ? "field" : "field mb-75" }>
            <input  type="text"
                    className={ (formSubmitted && !!nameValid) ? "input-field error" : "input-field" }
                    placeholder="Nombre Usuario"
                    onChange={ onInputChange }
                    name="name"
                    value={ name }
                    />
          </div>
          {
            (formSubmitted && !!nameValid) 
                && (<p className="errorMessage">{ nameValid }</p>)
          }

          <div className={ (formSubmitted && !!lastnameValid) ? "field" : "field mb-75" }>
              <input  type="text"
                      className={ (formSubmitted && !!lastnameValid) ? "input-field error" : "input-field" }
                      placeholder="Apellidos Usuario"
                      onChange={ onInputChange }
                      name="lastname"
                      value={ lastname }
                      />
            </div>
            {
              (formSubmitted && !!lastnameValid) 
                  && (<p className="errorMessage">{ lastnameValid }</p>)
            }
         <div className={ (formSubmitted && !!positionValid) ? "field" : "field mb-75" }>
             <input  type="text"
                     className={ (formSubmitted && !!positionValid) ? "input-field error" : "input-field" }
                     placeholder="Posición"
                     onChange={ onInputChange }
                     name="position"
                     value={ position }
                     />
           </div>
           {
             (formSubmitted && !!positionValid) 
                 && (<p className="errorMessage">{ positionValid }</p>)
           }
           <div className="bt-container">
             <button className="bt bt-register" onClick={ onSubmit }>Enviar</button>
           </div>
      </form>
      
      <section className="back-to-login">
        <p className="init"><Link to='/auth/login'>Volver a inicio</Link></p>
      </section>
    </>
  )
}
