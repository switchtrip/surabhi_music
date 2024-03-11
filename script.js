const eq = document.getElementById("eq");
function animate(event){
    eq.classList.toggle("active");
}
eq.addEventListener("click", animate);