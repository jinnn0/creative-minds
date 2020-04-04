function toggleMeu(){ 
  let hamburger = document.querySelector('.hamburger')
  let bar1 = hamburger.querySelectorAll('.bar-1')
  let bar2 = hamburger.querySelectorAll('.bar-2')
  let overlay = document.querySelectorAll('.overlay')
  let overlayLeft = document.querySelectorAll('.js-overlay-left')
  let overlayRight = document.querySelectorAll('.js-overlay-right')
    
  let click = 0 
  hamburger.addEventListener('click', () => {
    click++ 
    if(click % 2 === 1) {
      overlay.forEach(e => e.style.transition = "top 1s ease-in-out")
      overlayLeft.forEach(e => e.classList.add("slide-in"))
      overlayRight.forEach(e => e.classList.add("slide-in"))
      overlayLeft.forEach(e => e.style.transition = "all .6s ease-in-out .7s")
      overlayRight.forEach(e => e.style.transition = "all .6s ease-in-out .7s")
    } else { 
      overlay.forEach(e => e.style.transition = "top 1s ease-in-out .4s")
      overlayLeft.forEach(e => e.classList.remove("slide-in"))
      overlayRight.forEach(e => e.classList.remove("slide-in"))
      overlayLeft.forEach(e => e.style.transition = "all .6s ease-in-out")
      overlayRight.forEach(e => e.style.transition = "all .6s ease-in-out")
    }

    overlay.forEach(e => e.classList.toggle('overlay-visible'))
    bar1.forEach(e => e.classList.toggle('bar-1-rotate'))
    bar2.forEach(e => e.classList.toggle('bar-2-rotate'))
  })
} 
   
export default toggleMeu 