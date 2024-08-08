console.log("Hello");
const navbar = document.querySelector('#NavBar');
let sticky = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY > sticky) {    
    navbar.classList.add('sticky');
    console.log("sticky")
  } else if(window.screenY<=sticky) {
    navbar.classList.remove('sticky');    
    console.log("non ")
  }
}
window.addEventListener('scroll', stickynavbar);