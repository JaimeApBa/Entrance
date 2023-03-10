import { useContext, useState } from "react";
import { Logo } from "../../components";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context";
import { loginValidations } from "../validators";

const initialValues = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { formState, email, password, onInputChange,
          emailValid, passwordValid, isFormValid} = useForm(initialValues, loginValidations);

  const { loginWithCredentials } = useContext(AuthContext)


  const onSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);
    if(!isFormValid) return;

    loginWithCredentials(formState);
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
          <button className="bt bt-login" onClick={ onSubmit }>Entrar</button>
        </div>
      </form>
    </>
  )
}
