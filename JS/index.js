
document.querySelectorAll('nav a').forEach(function(link){link.addEventListener("mouseover", function(e){
    e.target.style.color = "purple"; setTimeout( () => {e.target.style.color ="";}, 500);}, false)
});