// Lista de cursos
const cursos = [
    {
        nombre: "Cálculo en una variable",
        desc: "Curso de mata."
    },
    {
        nombre: "Desarrollo de Habilidades para el trabajo",
        desc: "Descripcion."
    },
    {
        nombre: "Pensamiento computacional",
        desc: "HTML, CSS y JavaScript."
    }
];

// Lista de profesores
const profesores = [
    { nombre: "Ernesto Cuadros Vargas", linkedin: "https://www.linkedin.com/in/ecuadrosv?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
];

// Mostrar cursos en la página
let ulCursos = document.getElementById("lista-cursos");

cursos.forEach((curso, index) => {
    let li = document.createElement("li");
    li.textContent = curso.nombre;
    li.onclick = () => mostrarTarjeta(index);
    ulCursos.appendChild(li);
});

// Elementos de la tarjeta
const tarjeta = document.getElementById("tarjeta-curso");
const titulo = document.getElementById("curso-titulo");
const descripcion = document.getElementById("curso-descripcion");
const cerrar = document.getElementById("cerrar");

// Mostrar tarjeta
function mostrarTarjeta(i) {
    titulo.textContent = cursos[i].nombre;
    descripcion.textContent = cursos[i].desc;
    tarjeta.classList.remove("oculto");
}

// Cerrar tarjeta con la X
cerrar.onclick = () => tarjeta.classList.add("oculto");

// Cerrar haciendo clic fuera
tarjeta.onclick = (e) => {
    if (e.target === tarjeta) {
        tarjeta.classList.add("oculto");
    }
};

// Mostrar profesores
let ulProfes = document.getElementById("lista-profesores");

profesores.forEach(prof => {
    let li = document.createElement("li");
    li.innerHTML = `${prof.nombre} — 
        <a href="${prof.linkedin}" target="_blank">LinkedIn</a>`;
    ulProfes.appendChild(li);
});
