import "../styles/style.scss"

import {toggleMeu} from './modules/toggleMenu'
import {scrollTo} from './modules/smoothScroll'
import 'lazysizes'

console.log("switching to webpack...");
scrollTo()  
    
  
window.onload = function() {
  if (window.location.href.length == 22 // http://localhost:3000/ 
  || window.location.href.length == 40 // https://jinnn0.github.io/creative-minds/
  || window.location.href.includes('music.html')
  || window.location.href.includes('index.html')
  || window.location.href.includes('art.html')
  || window.location.href.includes('design.html')) {
    toggleMeu()
    console.log(window.location.href.length, window.location.href);
  }
} 