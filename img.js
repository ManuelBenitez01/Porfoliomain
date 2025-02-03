
// ✅ Seleccionar imágenes que activan cada proyecto
let imagenes1 = Array.from(document.querySelectorAll('.imgimg'));  // Primer proyecto
let imagenes2 = Array.from(document.querySelectorAll('.imgimg1')); // Segundo proyecto

let img1 = document.querySelector('.projectimg1');
let img2 = document.querySelector('.projectimg2'); 


let imagesProject1 = document.querySelectorAll('.projectimg1 .imgpro'); 
let imagesProject2 = document.querySelectorAll('.projectimg2 .imgpro2');

let images = []; 
let currentIndex = 0;
let activeProject = null;
let activeContainer = null; 


[...imagenes1, ...imagenes2].forEach((img) => {
    img.addEventListener("click", () => {
        img1.style.display = "none";
        img2.style.display = "none";

        if (imagenes1.includes(img)) {
            img1.style.display = "flex";
            activeProject = "projectimg1";
            images = imagesProject1;
            activeContainer = img1;
        } else {
            img2.style.display = "flex";
            activeProject = "projectimg2";
            images = imagesProject2;
            activeContainer = img2;
        }

        console.log("Proyecto activo:", activeProject, "Imágenes:", images);

        // Reiniciar índice y mostrar la primera imagen
        currentIndex = 0;
        showImage(currentIndex);
    });
});

// ✅ Función para mostrar la imagen actual y ocultar las demás
function showImage(index) {
    if (images.length === 0) {
        console.error("No hay imágenes en el proyecto activo");
        return;
    }

    images.forEach((img, i) => img.style.display = (i === index ? "block" : "none"));
}

// ✅ Agregar eventos a los botones de cada proyecto
function setupButtons(container, imagesArray) {
    let buttonNext = container.querySelector('.next');
    let buttonPrev = container.querySelector('.prev');
    let buttonClose = container.querySelector('.close');

    buttonNext.addEventListener('click', () => {
        if (imagesArray.length === 0) return;
        currentIndex = (currentIndex + 1) % imagesArray.length;
        showImage(currentIndex);
    });

    buttonPrev.addEventListener('click', () => {
        if (imagesArray.length === 0) return;
        currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
        showImage(currentIndex);
    });

    buttonClose.addEventListener('click', () => {
        container.style.display = "none";
        images = [];
    });
}

// ✅ Configurar botones para cada contenedor de proyecto
setupButtons(img1, imagesProject1);
setupButtons(img2, imagesProject2);
