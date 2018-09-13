// Hamburger menu script
function clickNav() {
    document.querySelector('.button-container').classList.toggle('active'); // When this is clicked it will toggle the active class
    document.querySelector('#overlay').classList.toggle('open'); //When this is clicked it will toggle the overlay class
}



//Wait till document loads before running the script
document.addEventListener('DOMContentLoaded', function () {
    //Listen for a click event on chinese
    document.querySelector('#chinese').addEventListener('click', function (e) {
        e.preventDefault();
        getChinese = document.querySelector('.chinese');
        getChinese.classList.toggle('hidden');
    })
     //Listen for a click event on pizza & pasta
    document.querySelector('#pizza-pasta').addEventListener('click', function (e) {
        e.preventDefault();
        getPizzaPasta = document.querySelector('.pizza-pasta');
        getPizzaPasta.classList.toggle('hidden');
    })
    //Listen for a click event on burger
    document.querySelector('#burger').addEventListener('click', function (e) {
        e.preventDefault();
        getBurger = document.querySelector('.burger');
        getBurger.classList.toggle('hidden');
    })
    //Listen for a click event on vietnamese
    document.querySelector('#vietnamese').addEventListener('click', function (e) {
        e.preventDefault();
        getVietnamese = document.querySelector('.vietnamese');
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

    // Get the offset position of the navbar
    const sticky = navbar.offsetTop - 100;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function scrollSubNav() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        
      } else {
        navbar.classList.remove("sticky");
      }
    }
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
