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
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("angular");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("github");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("typescript");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
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