// Hamburger menu script
function clickNav() {
    document.querySelector('.button-container').classList.toggle('active'); // When this is clicked it will toggle the active class
    document.querySelector('#overlay').classList.toggle('open'); //When this is clicked it will toggle the overlay class
}



//Wait till document loads before running the script
document.addEventListener('DOMContentLoaded', function () {
    //Listen for a click event on chinese
    document.querySelector('#asian').addEventListener('click', function (e) {
        e.preventDefault();
        getChinese = document.querySelector('.asian');
        getChinese.classList.toggle('hidden');
    })
     //Listen for a click event on pizza & pasta
    document.querySelector('#italian').addEventListener('click', function (e) {
        e.preventDefault();
        getPizzaPasta = document.querySelector('.italian');
        getPizzaPasta.classList.toggle('hidden');
    })
    //Listen for a click event on burger
    document.querySelector('#japanese').addEventListener('click', function (e) {
        e.preventDefault();
        getBurger = document.querySelector('.japanese');
        getBurger.classList.toggle('hidden');
    })
    //Listen for a click event on vietnamese
    document.querySelector('#burger').addEventListener('click', function (e) {
        e.preventDefault();
        getVietnamese = document.querySelector('.burger');
        getVietnamese.classList.toggle('hidden');
    })
    //Listen for a click event on cafe
    document.querySelector('#cafe').addEventListener('click', function (e) {
        e.preventDefault();
        getCafe = document.querySelector('.cafe');
        getCafe.classList.toggle('hidden');
    })

    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {
        scrollSubNav()
    };

    // Get the navbar
    const navbar = document.querySelector("#sub-nav");

    //Get the sticky header
    const stickyHeader = document.querySelector('.header-sticky');
    // Get the offset position of the navbar
    const sticky = navbar.offsetTop - 100;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function scrollSubNav() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        stickyHeader.style.background = 'rgb(0, 0, 0, 0.9)';

      } else {
        navbar.classList.remove("sticky");
        stickyHeader.style.background = 'rgb(0, 0, 0, 0.5)';
      }
    }

    const firstDot = document.querySelector('.featured-circle');
    const secondDot = document.querySelector('second-dot');
    const thirdDot = document.querySelector('third-dot');
    const fourthDot = document.querySelector('fourth-dot');
    const map1 = document.querySelector('#map-1');
    const map2 = document.querySelector('#map-2');
    const map3 = document.querySelector('#map-3');
    const map4 = document.querySelector('#map-4');

    firstDot.addEventListener('mouseover', function (e) { //check for an event hover
        e.preventDefault();
        map1.classList.toggle('faded');

     // reset the color after a short delay
    setTimeout(function() {
        map1.classList.toggle('faded');
      }, 500);
    }, false);

    
 })

$(document).ready(function () {
    //Form Trigger Javascript
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {
    
        var $this = $(this),
            label = $this.prev('label');
    
            if (e.type === 'keyup') {
                if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if( $this.val() === '' ) {
                label.removeClass('active highlight'); 
                } else {
                label.removeClass('highlight');   
                }   
        } else if (e.type === 'focus') {
            
            if( $this.val() === '' ) {
                label.removeClass('highlight'); 
                } 
            else if( $this.val() !== '' ) {
                label.addClass('highlight');
                }
        }
    
    });
    
    $('.tab a').on('click', function (e) {
        
        e.preventDefault();
        
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
        target = $(this).attr('href');
    
        $('.tab-content > div').not(target).hide();
        
        $(target).fadeIn(600);
        
    });

    
});
