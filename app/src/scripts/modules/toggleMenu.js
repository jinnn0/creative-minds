function toggleMeu(){ 
  let hamburger = document.querySelector('.hamburger')
  let bar1 = hamburger.querySelector('.bar-1')
  let bar2 = hamburger.querySelector('.bar-2')
  let overlay = document.querySelector('.overlay')
  let overlayLeft = document.querySelector('.js-overlay-left')
  let overlayRight = document.querySelector('.js-overlay-right')
 
  let click = 0 
  hamburger.addEventListener('click', (e) => {
    click++   
    if(click % 2 === 1) {    
      overlay.style.transition = "top 1s ease-in-out"
      overlayLeft.classList.add("slide-in") 
      overlayRight.classList.add("slide-in")
      overlayLeft.style.transition = "all .6s ease-in-out .7s"
      overlayRight.style.transition = "all .6s ease-in-out .7s"
    } else {  
      overlay.style.transition = "top 1s ease-in-out .4s"
      overlayLeft.classList.remove("slide-in")
      overlayRight.classList.remove("slide-in")
      overlayLeft.style.transition = "all .6s ease-in-out"
      overlayRight.style.transition = "all .6s ease-in-out"
    }

    overlay.classList.toggle('overlay-visible')
    bar1.classList.toggle('bar-1-rotate')
    bar2.classList.toggle('bar-2-rotate')
  })
} 
   
export default toggleMeu 