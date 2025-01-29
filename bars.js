let barra = document.getElementById('barra');
let ae = document.querySelectorAll(".ae");

barra.addEventListener("click", () => {
    ae.forEach((element) => {
        element.classList.add("show");
    });
});
       