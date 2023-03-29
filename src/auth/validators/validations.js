const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);

export const loginValidations = {
  email: [(value) => regex.test(value), 'El correo electronico no es válido'],
  password: [(value) => value.length >= 6, 'La contraseña ha de tener almenos 6 carácteres'],
}


export const registerValidations = {
  companyName: [(value) => value.length >= 2, 'El nombre de la compañía es obligatoria'],
  email: [(value) => regex.test(value), 'El correo electronico no es válido'],
  password: [(value) => value.length >= 6, 'La contraseña ha de tener almenos 6 carácteres'],
}