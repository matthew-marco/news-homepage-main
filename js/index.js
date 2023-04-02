let menuButton = document.querySelector(".menu-button");
let links = document.querySelector(".links");
let linksClose = document.querySelector(".links img");

menuButton.onclick =function (){
    links.classList.toggle("active")
}

linksClose.onclick = function(){
    if(links.classList.contains("active")){
        links.classList.remove("active")
    }
}