let barra = document.getElementById('barra');
let ae = document.querySelectorAll(".menu2");
let menu1 = document.getElementById('menu1');

barra.addEventListener("click", () => {
        ae.forEach((element) => {
            element.classList.toggle("show");
            element.classList.toggle("color");
        });
       
    
});



       