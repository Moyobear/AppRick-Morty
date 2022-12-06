const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,18}$/i;

export function validation(inputs) {
    let errors = {};

    if (inputs.username === "") errors.username = "El Usuario es requerido";
    else if (!regexEmail.test(inputs.username))
        errors.username = "El nombre de usuario debe ser un email válido";
    else if (inputs.username.length > 35)
        errors.username =
            "El nombre de usuario no debe tener más de 35 caractéres";
    else if (!regexPassword.test(inputs.password))
        errors.password = "Entre 1 y 18 caractéres y al menos 1 número";

    return errors;
}
