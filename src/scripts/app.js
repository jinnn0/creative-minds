import {toggleMeu} from './modules/toggleMenu'
import {scrollTo} from './modules/smoothScroll'
import 'lazysizes'

scrollTo()
 
 
window.onload = function() {
  if (window.location.href.length == 22
  || window.location.href.includes('index.html')
  || window.location.href.includes('art.html')
  || window.location.href.includes('design.html')) {
    toggleMeu()
  }
}

let colors = ["#D4B3FF", "#AEA2E8", "#BEC4FF", "#A2BCE8", "#B3E2FF"]
function randomColor(){
  return Math.floor(Math.random() * colors.length)
}

let logo = document.querySelector('a[href*="index.html"] p')
logo.addEventListener('click', ()=> {
  let body = document.querySelector('body')
  body.style.backgroundColor = colors[randomColor()]
})