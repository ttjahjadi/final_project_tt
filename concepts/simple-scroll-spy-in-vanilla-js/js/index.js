(function() {
  'use strict';
  
  var sections = document.querySelectorAll('article [id]');
  var navLinks = document.querySelectorAll('nav ul li a');

  function getClosestSection() {
    var sectionsLength = sections.length;
    
    for(var index=0; index<sectionsLength; index++) {
      if (isBelowScroll(sections.item(index))) 
        break;
    }

    
    selectLink(sections.item(index).id)
  }
  
  function isBelowScroll(element) {
    var position = element.getBoundingClientRect(); //get the dom object propert such as top, left, right, bottom , witdth, height, x and y
    return position.top > 0 // return position top if it's greater thand zero
  }
  
  function selectLink(id) {
    
    Array.prototype.forEach.call(navLinks, function(element){ //this will pick every arrays and do a forEach loop for every navlinks that has been scroll to remove the 'is-selected class'
      element.classList.remove('is-selected');
    });
    
    // get the a href id and add the 'is-selected' class
    document.querySelector('a[href="#'+id+'"]').classList.add('is-selected');
  }

  window.addEventListener('scroll', function(event) {
    getClosestSection();
  });
  
  
})();