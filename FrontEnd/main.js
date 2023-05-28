// Función Para login, va predeterminada con una sola credencial
function login(){
    var usuario,contraseña

    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;

    if (usuario == "ADMIN" && contraseña == "ADMIN"){
        alert("BIENVENIDO")
    }else{
        alert("CREDENCIALES INCORRECTAS")
    }
}

// Función para registrarse o crear credenciales

function  SignUp(){
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    if (usuario != "ADMIN" && contraseña != "ADMIN"){
        alert("SUS CREDENCIALES SE CREARON CORRECTAMENTE")
    }else{
        alert("ERROR, ESAS CREDENCIALES YA EXISTEN") 
    }
}
