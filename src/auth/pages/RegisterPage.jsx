import { useContext, useState } from "react";
import { Logo } from "../../components";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context";
import { registerValidations } from "../validators";


const initialValues = {
  email: '',
  company: '',
  password: ''
}

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { formState, email,company, password, onInputChange,
          emailValid, companyValid ,passwordValid, isFormValid} = useForm(initialValues, registerValidations);

  const { registerWithCredentials } = useContext(AuthContext)


  const onSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);
    if(!isFormValid) return;

    registerWithCredentials(formState);
  }


  return (
    <>
      <header className="headerAuth">
        <Logo />
      </header>

      <form className="auth-container">
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

          <div className={ (formSubmitted && !!companyValid) ? "field" : "field mb-75" }>
            <input  type="text"
                    className={ (formSubmitted && !!companyValid) ? "input-field error" : "input-field" }
                    placeholder="Compañía"
                    onChange={ onInputChange }
                    name="company"
                    value={ company }
                    />
          </div>
          {
            (formSubmitted && !!companyValid) 
                && (<p className="errorMessage">{ companyValid }</p>)
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
          <div className="bt-container">
            <button className="bt bt-register" onClick={ onSubmit }>Enviar</button>
          </div>
      </form>
    </>
  )
}
