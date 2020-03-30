function scrollTo(){
  const links = document.querySelectorAll('a')
  for (let i = 0; i < links.length; i++) {
    let link = links[i]
    if ((link.href && link.href.indexOf('#') != -1) 
       && ((link.pathname == location.pathname) 
       || ('/' + link.pathname == location.pathname)) 
       && (link.search == location.search)) {
      link.onclick = scrollAnchors;
    }
  }
 

  function scrollAnchors(e, respond = null) {
      e.preventDefault()
      const distanceToTop = el => Math.floor(el.getBoundingClientRect().top)
      let targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href')
      const targetAnchor = document.querySelector(targetID)
      if (!targetAnchor) return;
      const originalTop = distanceToTop(targetAnchor)
  
      window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' })
      
      const checkIfDone = setInterval(function() {
          const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2
          if (distanceToTop(targetAnchor) === 0 || atBottom) {
              targetAnchor.tabIndex = '-1'
              window.history.pushState('', '', targetID);
              clearInterval(checkIfDone)
          }
      }, 100)
  }
} 

export default scrollTo