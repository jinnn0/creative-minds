!function(e){function t(t){for(var o,i,a=t[0],c=t[1],u=t[2],s=0,h=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(f&&f(t);h.length;)h.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},l=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var f=c;l.push([3,1]),n()}([,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(1);var o=n(0),r=n.n(o);n(2);console.log("switching to webpack..."),function(){for(var e=document.querySelectorAll("a"),t=0;t<e.length;t++){var n=e[t];!n.href||-1==n.href.indexOf("#")||n.pathname!=location.pathname&&"/"+n.pathname!=location.pathname||n.search!=location.search||(n.onclick=o)}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.preventDefault();var n=function(e){return Math.floor(e.getBoundingClientRect().top)},o=t?t.getAttribute("href"):this.getAttribute("href"),r=document.querySelector(o);if(r){var l=n(r);window.scrollBy({top:l,left:0,behavior:"smooth"});var i=setInterval((function(){var e=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2;(0===n(r)||e)&&(r.tabIndex="-1",window.history.pushState("","",o),clearInterval(i))}),100)}}}(),window.onload=function(){var e,t,n,o,l,i;(22==window.location.href.length||40==window.location.href.length||window.location.href.includes("music.html")||window.location.href.includes("index.html")||window.location.href.includes("art.html")||window.location.href.includes("design.html"))&&(e=document.querySelector(".hamburger"),t=e.querySelector(".bar-1"),n=e.querySelector(".bar-2"),o=document.querySelector(".overlay"),l=document.querySelector(".header"),i=l.querySelector(".header-content"),e.addEventListener("click",(function(){o.classList.toggle("overlay-visible"),l.classList.toggle("header-has-overlay"),i.classList.toggle("header-content-has-overlay"),t.classList.toggle("bar-1-rotate"),n.classList.toggle("bar-2-rotate"),r.a.init()})),console.log(window.location.href.length,window.location.href))}}]);