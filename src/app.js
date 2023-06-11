const actionBtn = document.querySelector(".action_btn");
const mobileMenu = document.querySelector(".mobile_menu");
const pathIcon = document.querySelector(".path");

let isMenuOpen = false;

actionBtn.addEventListener("click", function(){
    mobileMenu.classList.toggle("hidden")
    isMenuOpen = !isMenuOpen;
    updateIcon();
})

function updateIcon(){
    if(isMenuOpen){
        pathIcon.setAttribute("d", "M6 18L18 6M6 6l12 12")
    }else {
        pathIcon.setAttribute("d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5")
    }
}