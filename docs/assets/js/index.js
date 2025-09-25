// Força a aplicação desse css no home.
document.addEventListener("DOMContentLoaded", function(){
    if(window.location.pathname === '/' || window.location.pathname.endsWith("/index/")){
        document.body.classList.add("home")
    }
})