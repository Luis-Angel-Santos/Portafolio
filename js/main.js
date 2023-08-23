let menuVisible = false;

const datosPersonales = [
    { label: 'Cumpleaños', value: '09 de febrero' },
    { label: 'Teléfono', value: '241 239 4657' },
    { label: 'Email', value: 'santosangel748@gmail.com' },
    { label: 'Dirección', value: 'Tlaxcala, México' },
    { label: 'Cargo Actual', value: 'Desarrollador Java' },
];

const intereses = [
    { icono: 'fa-gamepad', nombre: 'JUEGOS' },
    { icono: 'fa-headphones', nombre: 'MUSICA' },
    { icono: 'fa-plane', nombre: 'VIAJAR' },
    { icono: 'fa-code', nombre: 'PROGRAMAR' },
    { icono: 'fa-futbol', nombre: 'DEPORTE' },
    { icono: 'fa-book', nombre: 'LIBROS' },
    { icono: 'fa-language', nombre: 'IDIOMAS' },
    { icono: 'fa-camera', nombre: 'FOTOS' },
];

const habilidadesTecnicas = [
    { icon: 'angularjs', title: 'Angular' },
    { icon: 'html5', title: 'HTML' },
    { icon: 'github', title: 'GitHub' },
    { icon: 'javascript', title: 'JavaScript' },
    { icon: 'typescript', title: 'TypeScript' },
    { icon: 'nodejs', title: 'Node.js' },
    { icon: 'java', title: 'Java' },
    { icon: 'mysql', title: 'MySQL' },
    { icon: 'mongodb', title: 'MongoDB' },
    { icon: 'firebase', title: 'Firebase' },
    { icon: 'dotnetcore', title: '.NET Core' },
    { icon: 'bootstrap', title: 'Bootstrap' },
    { icon: 'bash', title: 'Bash' },
    { icon: 'git', title: 'Git' },
    { icon: 'slack', title: 'Slack' },
];

const habilidadesBlandas = [
    { icon: 'fa-regular fa-face-smile', title: 'Comunicación' },
    { icon: 'fa-solid fa-people-group', title: 'Trabajo en Equipo' },
    { icon: 'fa-solid fa-star', title: 'Creatividad' },
    { icon: 'fa-solid fa-hands-clapping', title: 'Dedicación' },
    { icon: 'fa-solid fa-bars-progress', title: 'Administración de proyectos' },
    { icon: 'fa-solid fa-arrow-up-right-dots', title: 'Proactividad' },
    { icon: 'fa-solid fa-people-arrows', title: 'Adaptabilidad' },
    { icon: 'fa-solid fa-tools', title: 'Resolución de problemas' },
    { icon: 'fa-solid fa-calendar', title: 'Organización' },
];

const proyectos = [
    { 
        link: 'https://mariogame-js.netlify.app/',
        imagen: 'assets/img/marioGame.png',
        titulo: 'Juego de Mario',
        tecnologias: 'HTML - JS - CSS'
    },
    { 
        link: 'https://luis-angel-santos.github.io/Blackjack/',
        imagen: 'assets/img/blackjack.png',
        titulo: 'BlackJack',
        tecnologias: 'HTML - JS - CSS'
    },
    { 
        link: 'https://luis-angel-santos.github.io/PeliculasApp/home',
        imagen: 'assets/img/peliculas.png',
        titulo: 'App de Películas',
        tecnologias: 'Desarrollada usando una API'
    },
    { 
        link: 'https://luis-angel-santos.github.io/appClima/',
        imagen: 'assets/img/clima.png',
        titulo: 'App del Clima',
        tecnologias: 'Desarrollada usando una API'
    },
    { 
        link: 'https://luis-angel-santos.github.io/Pagina-de-Comida/',
        imagen: 'assets/img/comida.png',
        titulo: 'Página de Restaurante',
        tecnologias: 'HTML - CSS - JS'
    },
    { 
        link: 'https://fisio.netlify.app/',
        imagen: 'assets/img/fisio.png',
        titulo: 'FISIO',
        tecnologias: 'Angular v15 - TypeScript - NodeJS - PWA'
    },
    { 
        link: 'https://jokes-app-lasi.netlify.app/',
        imagen: 'assets/img/jokes.png',
        titulo: 'Jokes App',
        tecnologias: 'Angular v15 - TypeScript - NodeJS - API'
    },
    { 
        link: 'https://heroes-lasi.netlify.app/',
        imagen: 'assets/img/heroes.png',
        titulo: 'Héroes App',
        tecnologias: 'Angular v15 - TypeScript - NodeJS - PWA'
    },
    { 
        link: 'https://trivia-lasi.netlify.app/',
        imagen: 'assets/img/trivia.png',
        titulo: 'Trivia App',
        tecnologias: 'Angular v15 - TypeScript - NodeJS - PWA'
    },
    { 
        link: 'https://sistema-venta-lasi.netlify.app/',
        imagen: 'assets/img/sistemaVentas.png',
        titulo: 'Sistema de Ventas',
        tecnologias: 'Angular v15 - C# - MySQL - PWA'
    }
];


function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

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

function generarDatosPersonales() {
    const col = document.querySelector('.col');
    
    const datosList = document.createElement('ul');
    datosList.innerHTML = datosPersonales.map(dato => {
        if (dato.label === 'Cargo Actual') {
            return `<li><strong>${dato.label}</strong> <span>${dato.value}</span></li>`;
        }
        return `<li><strong>${dato.label}</strong> ${dato.value}</li>`;
    }).join('');

    col.appendChild(datosList);
}

function generarIntereses() {
    const contenedorIntereses = document.querySelector('.contenedor-intereses');
    
    intereses.forEach(interes => {
        const divInteres = document.createElement('div');
        divInteres.classList.add('interes');
        
        const icono = document.createElement('i');
        icono.classList.add('fa-solid', `${interes.icono}`);
        
        const nombre = document.createElement('span');
        nombre.textContent = interes.nombre;
        
        divInteres.appendChild(icono);
        divInteres.appendChild(nombre);
        
        contenedorIntereses.appendChild(divInteres);
    });
}

function generarHabilidadesTecnicas() {
    const skillsContainer = document.querySelector('.container-skills');
    
    habilidadesTecnicas.forEach(habilidad => {
        const skill = document.createElement('div');
        skill.classList.add('skill');
        skill.title = habilidad.title;
        
        const icon = document.createElement('img');
        if(habilidad.title != 'Firebase'){
            icon.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${habilidad.icon}/${habilidad.icon}-original.svg`;
        }else{
            icon.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${habilidad.icon}/${habilidad.icon}-plain.svg`;
        }
        
        skill.appendChild(icon);
        skillsContainer.appendChild(skill);
    });
}



function generarHabilidadesBlandas() {
    const skillsContainer = document.querySelector('.contenedor-skills2');
    
    habilidadesBlandas.forEach(habilidad => {
        const interes = document.createElement('div');
        interes.classList.add('interes');
        
        const icon = document.createElement('i');
        icon.className = habilidad.icon;
        
        const span = document.createElement('span');
        span.textContent = habilidad.title;
        
        interes.appendChild(icon);
        interes.appendChild(span);
        skillsContainer.appendChild(interes);
    });
}

function generarProyectos() {
    const galeria = document.querySelector('.galeria');
    
    proyectos.forEach(proyecto => {
        const enlace = document.createElement('a');
        enlace.href = proyecto.link;
        
        const proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto');
        
        const imagen = document.createElement('img');
        imagen.src = proyecto.imagen;
        imagen.alt = proyecto.titulo;
        imagen.loading = 'lazy';
        
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        
        const titulo = document.createElement('h3');
        titulo.textContent = proyecto.titulo;
        
        const tecnologias = document.createElement('p');
        tecnologias.textContent = proyecto.tecnologias;
        
        overlay.appendChild(titulo);
        overlay.appendChild(tecnologias);
        
        proyectoDiv.appendChild(imagen);
        proyectoDiv.appendChild(overlay);
        
        enlace.appendChild(proyectoDiv);
        galeria.appendChild(enlace);
    });
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

generarDatosPersonales();
generarHabilidadesTecnicas();
generarIntereses();
generarHabilidadesBlandas();
generarProyectos();


