const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", ()=>{
    const visibility = primaryNav.getAttribute("data-visible");
    console.log("Toggle area clicked ");
    console.log(visibility);
    toggleNavArea(visibility);
})
// Toggle nav area on mobile view when clicked out
document.addEventListener("click", (e)=>{
    const outArea = !navToggle.contains(e.target) && !primaryNav.contains(e.target)
    const visibility = primaryNav.getAttribute("data-visible");
    console.log("Out area clicked", visibility==="true" && outArea);
    if (visibility==="true" && outArea) toggleNavArea(visibility);
})

function toggleNavArea(visibility){
    if (visibility==="false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else{
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

}