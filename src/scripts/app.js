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