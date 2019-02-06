//Lohin button changes color
document.querySelectorAll('nav a').forEach(function(link){link.addEventListener("mouseover", function(e){
    e.target.style.color = "purple"; setTimeout( () => {e.target.style.color ="";}, 500);}, false)
});

// tsting


const toggleMenu = () => {
    menu.classList.toggle('login--open');
  }
  const menu = document.querySelector(".login");
  const menuButton = document.querySelector(".login-tab");
  menuButton.addEventListener("click", toggleMenu);
  
