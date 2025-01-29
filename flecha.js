let scroll1 = document.getElementById("scroll");

if (scroll1) { 
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            scroll1.classList.add  ("hide");
        } else if (scrollPosition < 1000) {
            scroll1.classList.remove ("hide");
        }
    });
} else {
    console.error("Elemento con id 'scroll' no encontrado.");
}
