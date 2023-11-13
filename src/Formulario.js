import { useState, useEffect, useCallback } from 'react';

function Formulario() {

    // CAMPO EMAIL *******************************************
    const [enteredEmail, setEnteredEmail] = useState('');
    const [validateEmail, setValidateEmail] = useState(false);
    const [alertaEmail , setAlertaEmail] = useState("")

    function updateEmailHandler(event) {

        const enteredEmail = event.target.value

        
        if (enteredEmail.includes('@') && enteredEmail.length > 0 && enteredEmail.length <= 20) {
            
            setEnteredEmail(event.target.value);
            
            console.log('mail ok!');
            setValidateEmail(true);
            setAlertaEmail = ""
        } else if (enteredEmail.length > 0) {
            setAlertaEmail("El email no puede estar vacío.")
        } else if (enteredEmail.length <= 20) {
            setAlertaEmail ("El email no puede contener más de 20 caracteres")
        } else {
            setAlertaEmail ("El email debe contener un @.")
        }
    }


    // CAMPO NOMBRE *******************************************
    const [enteredNombre, setEnteredNombre] = useState('');
    const [validateNombre, setValidateNombre] = useState(false);
    const [alertaNombre, setAlertaNombre] = useState('')

    function updateNombreHandler(event) {
        const enteredName = event.target.value
        if (enteredName.length > 0 && enteredName.length <= 10) {
            setEnteredNombre(event.target.value);
            console.log('nombre ok!');
            setValidateNombre(true);
            setAlertaNombre("")
        } else if (enteredName.length > 10) {
            setAlertaNombre("El nombre no puede contener más de 10 caracteres.")
        } else if (enteredName.length === 0) {
            setAlertaNombre("El nombre no puede estar vacío.")
        }
    }

    // CAMPO APELLIDOS *******************************************
    const [enteredApellido, setEnteredApellido] = useState('');
    const [validateApellido, setValidateApellido] = useState(false);
    const [alertaApellido, setAlertaApellido] = useState("")

    function updateApellidosHandler(event) {
        setEnteredApellido(event.target.value);
        if (enteredApellido.length > 0 && enteredApellido.length <= 20) {
            
            console.log('apellidos ok!');
            setValidateApellido(true);
            setAlertaApellido("")
            
        } else if (enteredApellido.length === 0) {
            setAlertaApellido ("El apellido no puede estar vacío.")
        } else {
            setAlertaApellido ("El apellido no puede contener más de 20 caracteres.")
        }
    }

    // CAMPO SEXO *******************************************
    const [enteredSexo, setEnteredSexo] = useState('');
    const [validateSexo, setValidateSexo] = useState(true);

    function updateSexoHandler(event) {
        setEnteredSexo(event.target.value);
        
            console.log('sexo ok!');
            setValidateSexo(true);
    
    }


    // CAMPO MENSAJE *******************************************
    const [enteredMensaje, setEnteredMensaje] = useState('');
    const [validateMensaje, setValidateMensaje] = useState(false);
    const [alertaMensaje, setAlertaMensaje] = useState("")

    function updateMensajeHandler(event) {
        setEnteredMensaje(event.target.value);
        if (enteredMensaje.length <= 500) {
            console.log('mensaje ok!');
            setValidateMensaje(true);
            setAlertaMensaje = ""
        } else {
            setAlertaMensaje ("El mensaje no puede contener más de 500 caracteres.")
        }
    }


    // CAMPO TÉRMINOS *******************************************
    const [enteredTerminos, setEnteredTerminos] = useState('');
    const [validateTerminos, setValidateTerminos] = useState(false);
    const [alertaTerminos, setAlertaTerminos] = useState("")

    const [checked, setChecked] = useState(true)

    function updateTerminosHandler(event) {
        setChecked((c) => !c);
        console.log(checked);
        setEnteredTerminos(event.target.checked);
        if (checked === true) { 
            console.log('términos ok!');
            console.log(checked);
            setValidateTerminos(true);
            setAlertaTerminos("")
        } else {
            alertaTerminos("Debe aceptar los términos y condiciones.")
        }
    }

    // Función para la comprobación de los datos y envío del formulario (mostrar mensaje)
    function handleSubmit(e) {
        e.preventDefault();
        if (validateNombre === true && validateApellido === true && validateEmail === true && validateSexo === true && validateMensaje === true && validateTerminos === true) {
            console.log("Formulario enviado correctamente")
        } else{
            console.log("el formulario no se ha enviado") // TODO mostrar mensaje al usuario
        }
    }

    return (

        <form onSubmit={handleSubmit} className='form'>

            <div>
                <h1>Formulario de registro</h1>
            </div>

            <div>
                <label>Nombre</label><span>   </span>
                <input type="text" onChange={updateNombreHandler}/>
                <p>{alertaNombre}</p>
            </div>

            <br />

            <div>
                <label>Apellidos</label><span>   </span>
                <input type="text" onChange={updateApellidosHandler} />
                <p>{alertaApellido}</p>
            </div>

            <br />

            <div>
                <label>Email</label><span>   </span>
                <input type="text" onChange={updateEmailHandler} />
                <p>{alertaEmail}</p>
            </div>

            <br />

            <div>
                <label>Sexo</label><span>   </span>
                <select className='textarea' type="text" onChange={updateSexoHandler}>
                    <option value="Mujer">Mujer</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Otro">Otro</option>
                    <option selected value="Sin especificar">Sin especificar</option>
                </select>
            </div>

            <br />

            <div>
                <label>Mensaje</label><span>   </span>
                <textarea className='textarea' type="text" onChange={updateMensajeHandler}/>
                <p>Caracteres restantes: {500 - enteredMensaje.length}</p>
                <p>{alertaMensaje}</p>
            </div>

            <br />

            <div>
                <label>Aceptar términos y condiciones</label><span>   </span>
                <input type='checkbox' value={checked} name="terminos" onChange={updateTerminosHandler}/>
                <p>{alertaTerminos}</p>
            </div>

            <br />

            <button type='submit'>Enviar Formulario</button>
        </form>
    );
}

export default Formulario;