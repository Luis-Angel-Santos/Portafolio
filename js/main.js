let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function contacto(){
    var nombre = document.getElementsByClassName('datosContacto')[0].value;
    var telefono = document.getElementsByClassName('datosContacto')[1].value;
    var correo = document.getElementsByClassName('datosContacto')[2].value;
    var tema = document.getElementsByClassName('datosContacto')[3].value;
    var mensaje = document.getElementsByClassName('datosContacto')[4].value;

    window.location.href = `mailto:santosangel748@gmail.com?Subject=${tema}&body=Hola%20que%20tal%20soy%20${nombre},%20me%20gustaria%20decirte%20lo%20siguiente%20${mensaje}.
        %20Aquí%20te%20dejo%20mis%20datos%20de%20contacto:%20Telefono-->%20${telefono}%20y%20Correo-->%20${correo}.
        Un%20saludo,%20${nombre}`
}