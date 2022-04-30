
//change navbar
window.addEventListener('scroll', () => {

    document.querySelector('header').classList.toggle
    ('window-scroll' , window.scrollY > 0)


});


/* --------------- Change Page Theme --------------- */


const toggle_btn = document.querySelector(".moon")

function changeTheme() {

  if(!document.body.classList.contains("dark")){

      document.body.classList.add("dark"); //มีคลาสใน css
      toggle_btn.classList.replace("uil-sun","uil-moon");
      localStorage.setItem("dark",1)


  }else{

      document.body.classList.remove("dark"); 
      toggle_btn.classList.replace("uil-moon","uil-sun");
      localStorage.setItem("dark",0)
  }
}
toggle_btn.addEventListener("click", () => {
  changeTheme();


})

/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-
  if(this.scrollY>=350)scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('menu-text'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
          navToggle.addEventListener('click',() =>{

            navMenu.classList.add('show-menu')
            
          })
      }

      if(navClose){

        navClose.addEventListener('click',() => {

            navMenu.classList.remove('show-menu')

        })
      }




/* Link active featured */ 

const LinkFeatured = document.querySelectorAll('.portfolio__icon')
function activeFeatured(){

    LinkFeatured.forEach(l=> l.classList.remove('portfolio__active'))
    this.classList.add('portfolio__active')
}

LinkFeatured.forEach(l=> l.addEventListener('click',activeFeatured))

      
/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__section'),
skillsHeader = document.querySelectorAll('.skills__box')


function toggleSkills(){
let itemClass = this.parentNode.className

for(i = 0; i < skillsContent.length; i++){
  skillsContent[i].className = 'skills__section skills__close'
}
if(itemClass === 'skills__section skills__close'){
  this.parentNode.className = 'skills__section skills__open'
}
}
skillsHeader.forEach((el) =>{
el.addEventListener('click', toggleSkills)
})


/*==================== swiper ====================*/





