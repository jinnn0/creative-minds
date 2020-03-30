import AOS from 'aos'
   
function toggleMeu(){
  let hamburger = document.querySelector('.hamburger')
  let bar1 = hamburger.querySelector('.bar-1')
  let bar2 = hamburger.querySelector('.bar-2')
  let overlay = document.querySelector('.overlay')
  let header = document.querySelector('.header')
  let headerContent = header.querySelector('.header-content')
   
  hamburger.addEventListener('click', () => {
    overlay.classList.toggle('overlay-visible')
    header.classList.toggle('header-has-overlay')
    headerContent.classList.toggle('header-content-has-overlay')
    bar1.classList.toggle('bar-1-rotate')
    bar2.classList.toggle('bar-2-rotate')
    AOS.init()
  })
} 
  
export default toggleMeu