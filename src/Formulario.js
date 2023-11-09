import { useState, useEffect, useCallback } from 'react';

function Formulario() {

    // CAMPO EMAIL *******************************************
    const [enteredEmail, setEnteredEmail] = useState('');
    const [validateEmail, setValidateEmail] = useState(false);

    function updateEmailHandler(event) {
        setEnteredEmail(event.target.value);
        if (enteredEmail.includes('@') && enteredEmail.length > 0 && enteredEmail.length <= 20) {
            console.log('mail ok!');
            setValidateEmail(true);
        }
    }


    // CAMPO NOMBRE *******************************************
    const [enteredNombre, setEnteredNombre] = useState('');
    const [validateNombre, setValidateNombre] = useState(false);

    function updateNombreHandler(event) {
        setEnteredNombre(event.target.value);
        if (enteredNombre.length > 0 && enteredNombre.length <= 10) {
            console.log('nombre ok!');
            setValidateNombre(true);
        }
    }

    // CAMPO APELLIDOS *******************************************
    const [enteredApellido, setEnteredApellido] = useState('');
    const [validateApellido, setValidateApellido] = useState(false);

    function updateApellidosHandler(event) {
        setEnteredApellido(event.target.value);
        if (enteredApellido.length > 0 && enteredApellido.length <= 20) {
            console.log('apellidos ok!');
            setValidateApellido(true);
        }
    }

    // CAMPO SEXO *******************************************
    const [enteredSexo, setEnteredSexo] = useState('');
    const [validateSexo, setValidateSexo] = useState(false);

    function updateSexoHandler(event) {
        setEnteredSexo(event.target.value);
        
            console.log('sexo ok!');
            setValidateSexo(true);
    
    }


    // CAMPO MENSAJE *******************************************
    const [enteredMensaje, setEnteredMensaje] = useState('');
    const [validateMensaje, setValidateMensaje] = useState(false);

    function updateMensajeHandler(event) {
        setEnteredMensaje(event.target.value);
        if (enteredMensaje.length <= 500) {
            console.log('mensaje ok!');
            setValidateMensaje(true);
        }
    }


    // CAMPO TÉRMINOS *******************************************
    const [enteredTerminos, setEnteredTerminos] = useState('');
    const [validateTerminos, setValidateTerminos] = useState(false);

    function updateTerminosHandler(event) {
        setEnteredTerminos(event.target.value);
        if (enteredTerminos === true) { // TODO cuando seleccione el checkbox devolver true
            console.log('términos ok!');
            setValidateTerminos(true);
        }
    }

    // Función para la comprobación de los datos y envío del formulario (mostrar mensaje)
    function handleSubmit(e) {
        e.preventDefault();
        if (validateNombre === true && validateApellido === true && validateEmail === true && validateSexo === true && validateMensaje === true && validateTerminos === true) {
            console.log("Formulario enviado correctamente")
        }
    }

    return (

        <form onSubmit={handleSubmit}>

            <div>
                <h1>Formulario de registro</h1>
            </div>

            <div>
                <label>Nombre</label><span>   </span>
                <input type="text" onChange={updateNombreHandler} />
            </div>

            <br />

            <div>
                <label>Apellidos</label><span>   </span>
                <input type="text" onChange={updateApellidosHandler} />
            </div>

            <br />

            <div>
                <label>Email</label><span>   </span>
                <input type="text" onChange={updateEmailHandler} />
            </div>

            <br />

            <div>
                <label>Sexo</label><span>   </span>
                <select type="text" onChange={updateSexoHandler}>
                    <option value="Mujer">Mujer</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Otro">Otro</option>
                    <option selected value="Sin especificar">Sin especificar</option>
                </select>
            </div>

            <br />

            <div>
                <label>Mensaje</label><span>   </span>
                <textarea type="text" onChange={updateMensajeHandler} />
            </div>

            <br />

            <div>
                <label>Aceptar términos y condiciones</label><span>   </span>
                <input type='checkbox' name="terminos" onChange={updateTerminosHandler}/> // TODO establecer variable a true si se selecciona
            </div>

            <br />

            <button type='submit'>Enviar Formulario</button>
        </form>
    );
}

export default Formulario;