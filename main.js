const yourName = document.getElementById('inputNombre')
const yourMail = document.getElementById('inputEmail4')
const yourPassword = document.getElementById('userPassword')
const yourPasswordRep = document.getElementById('userPasswordRepeat')


const userInfo = document.getElementById('content')

//botones
const submitBtn = document.getElementById('btn')

//alertas
const validationAlerts = document.getElementById('alerts')

// validacion para Email correcto
const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

// Expresión regular para contraseña de Mínimo 8 caracteres, al menos una letra y un número:
const validPassword = /^(?=.*[a-z])(?=.*\d)[a-z\d\w\W]{8,}$/;



function onSubmit(event) {
    // para que no refresque la pagina
    event.preventDefault()

    const userFromStorage = JSON.parse(localStorage.getItem('userName'))

    if (yourName.value === '' || yourMail.value === '' || yourPassword.value === '' || yourPasswordRep.value === '') {
        return alert("Por favor rellene las casillas");
    }

    if( !validEmail.test(yourMail.value) ){
        return alert('El email introducido no es válido');
    } 
        
    if ( !validPassword.test(yourPassword.value)) {
      return alert("La contraseña no cumple los requerimientos");
    }

    if (yourPassword.value !== yourPasswordRep.value) {
        yourPassword.value = "";
        yourPasswordRep.value = "";
        return alert("Las contraseñas no coinciden", "danger");
    }


        console.log('success')
        saveDataStorage()
        userInfo.innerHTML = `<p>Hola ${userFromStorage.yourName}</p>`
}

function saveDataStorage(guardarLista) {
    localStorage.setItem('userName', JSON.stringify({
        yourName: inputNombre.value,
        yourMail: inputEmail4.value,
    }))

    alert("Usuario Creado correctamente", "success");
}

function alert(alertMsg, type){
    let alerts = document.createElement("div");
 
    validationAlerts.innerHTML = [`<div class='alert alert-${type}' role='alert'>`,
    alertMsg,
    "</div>"].join("");
     
    //El método Element.append() inserta un conjunto de objetos Node u objetos de tipo cadena después del último hijo de Element
    validationAlerts.append(alerts);
  
    setTimeout(() => {
     validationAlerts.innerHTML = "";
    }, 3000);
  
 }
   

submitBtn.addEventListener('click', onSubmit)