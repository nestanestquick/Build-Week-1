//Login button changes color
document.querySelectorAll('nav a').forEach(function(link){link.addEventListener("mouseover", function(e){
    e.target.style.color = "purple"; setTimeout( () => {e.target.style.color ="";}, 500);}, false)
});

// testing
const toggleMenu = () => {
    menu.classList.toggle('login--open');
  }
  const menu = document.querySelector(".login");
  const menuButton = document.querySelector(".login-tab");
  menuButton.addEventListener("click", toggleMenu);

//exp tabs
class Tab {
    constructor(element) {
        this.element = element; 
        this.openButton = element.querySelectorAll('.openButton');
        this.openButton.forEach((item) => item.textContent = 'Open Sesame');
        this.openButton.forEach((item) => item.addEventListener('click', () => this.expandTabs()));
    }
    expandTabs() {
        this.element.classList.toggle('article-open');
    }
  }  
let plswork = document.querySelectorAll('.openSesame').forEach(tab => new Tab(tab)); 
  
