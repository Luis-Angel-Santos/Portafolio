let menuVisible = false;

const frases = [
  "un apasionado por el código limpio.",
  "un desarrollador enfocado en la eficiencia.",
  "un amante de la innovación y la tecnología.",
  "un profesional que busca mejorar cada día.",
  "un fan de los retos y los nuevos aprendizajes.",
  "alguien que combina tecnología con visión.",
  "alguien motivado por crear experiencias útiles.",
  "un programador que disfruta cada línea bien escrita.",
  "un entusiasta de la arquitectura y el buen diseño.",
];


const typingElement = document.querySelector(".typing");
let fraseIndex = 0;
let letraIndex = 0;
let borrando = false;

const datosPersonales = [
    { label: 'Cumpleaños', value: '09 de febrero' },
    { label: 'Teléfono', value: '241 239 4657' },
    { label: 'Internacional', value: '+52 1 241 239 4657' },
    { label: 'Email', value: 's.angeldev@gmail.com' },
    { label: 'Dirección', value: 'Tlaxcala, México' },
    { label: 'Cargo Actual', value: 'Desarrollador Web' },
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
    { icon: 'firebird', title: 'Firebird' },
    { icon: 'android', title: 'Android' },
    { icon: 'postman', title: 'Postman' },
    { icon: 'express', title: 'Express' },
    { icon: 'dotnetcore', title: '.NET Core' },
    { icon: 'bootstrap', title: 'Bootstrap' },
    { icon: 'bash', title: 'Bash' },
    { icon: 'git', title: 'Git' },
    { icon: 'slack', title: 'Slack' },
    { icon: 'vscode', title: 'VS Code' },
];

const habilidadesBlandas = [
  { icon: 'fa-solid fa-comments', title: 'Comunicación Efectiva' },
  { icon: 'fa-solid fa-people-group', title: 'Trabajo en Equipo' },
  { icon: 'fa-solid fa-people-arrows', title: 'Adaptabilidad' },
  { icon: 'fa-solid fa-lightbulb', title: 'Pensamiento Crítico' },
  { icon: 'fa-solid fa-brain', title: 'Resolución de Problemas' },
  { icon: 'fa-solid fa-arrow-up-right-dots', title: 'Proactividad' },
  { icon: 'fa-solid fa-clock', title: 'Gestión del Tiempo' },
  { icon: 'fa-solid fa-bullseye', title: 'Orientación a Resultados' },
  { icon: 'fa-solid fa-seedling', title: 'Aprendizaje Continuo' },
];


const proyectos = [
    { 
        link: 'https://fisio.netlify.app/',
        imagen: 'assets/img/fisio.png',
        titulo: 'FISIO',
        tecnologias: 'Angular v15 - TypeScript - NodeJS - PWA'
    },
    { 
        link: 'https://ticketfactura.com.mx',
        imagen: 'assets/img/facturacion_pg.png',
        titulo: 'Facturación Electrónica Grupo Empresarial PG',
        tecnologias: 'Angular v15 - TypeScript - Java'
    },
    { 
        link: 'https://mifactura.vgbizgroup.com/',
        imagen: 'assets/img/v&g.png',
        titulo: 'Facturación Electrónica V&G Business Group',
        tecnologias: 'Angular v15 - TypeScript - Java'
    },
    { 
        link: 'https://login.wiprecargas.com/',
        imagen: 'assets/img/wiprecargas.png',
        titulo: 'WipRecargas Web',
        tecnologias: 'Java - JSF - PrimeFaces'
    },
    { 
        link: 'https://play.google.com/store/apps/details?id=com.wiprecargas.mobile.v2.activity&hl=es_MX',
        imagen: 'assets/img/wip_app.png',
        titulo: 'WipRecargas Android',
        tecnologias: 'Java - Android Studio - XML'
    },
    { 
        link: 'https://luis-angel-santos.github.io/PeliculasApp/home',
        imagen: 'assets/img/peliculas.png',
        titulo: 'Repertorio de Películas',
        tecnologias: 'Desarrollada usando una API'
    },
    { 
        link: 'https://luis-angel-santos.github.io/appClima/',
        imagen: 'assets/img/clima.png',
        titulo: 'App del Clima',
        tecnologias: 'Desarrollada usando una API'
    }
];

function typeEffect() {
    const fraseActual = frases[fraseIndex];

    if (!borrando) {
      // Escribiendo
      typingElement.textContent = fraseActual.substring(0, letraIndex + 1);
      letraIndex++;

      if (letraIndex === fraseActual.length) {
        // Pausa antes de borrar
        borrando = true;
        setTimeout(typeEffect, 2000);
        return;
      }
    } else {
      // Borrando
      typingElement.textContent = fraseActual.substring(0, letraIndex - 1);
      letraIndex--;

      if (letraIndex === 0) {
        borrando = false;
        fraseIndex = (fraseIndex + 1) % frases.length;
      }
    }

    const velocidad = borrando ? 30 : 100; // velocidad escribir/borrar
    setTimeout(typeEffect, velocidad);
  }

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

    window.location.href = `mailto:s.angedev@gmail.com?Subject=${tema}&body=Hola%20que%20tal%20soy%20${nombre},%20me%20gustaria%20decirte%20lo%20siguiente%20${mensaje}.
        %20Aquí%20te%20dejo%20mis%20datos%20de%20contacto:%20Telefono-->%20${telefono}%20y%20Correo-->%20${correo}.
        Un%20saludo,%20${nombre}`
}

generarDatosPersonales();
generarHabilidadesTecnicas();
generarIntereses();
generarHabilidadesBlandas();
generarProyectos();
typeEffect();


