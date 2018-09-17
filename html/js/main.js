// Hamburger menu script
function clickNav() {
    document.querySelector('.button-container').classList.toggle('active'); // When this is clicked it will toggle the active class
    document.querySelector('#overlay').classList.toggle('open'); //When this is clicked it will toggle the overlay class
}



//Wait till document loads before running the script
document.addEventListener('DOMContentLoaded', function () {

    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {
        scrollSubNav()
    };

    // Get the navbar
    const navbar = document.querySelector("#sub-nav");

    //Get the sticky header
    const stickyHeader = document.querySelector('.header-sticky');
    // Get the sticky header img/logo
    const stickyHeaderImg = document.querySelector('.header-sticky img');
    // Get the offset position of the navbar
    const sticky = navbar.offsetTop - 100;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function scrollSubNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        stickyHeader.style.background = 'rgb(0, 0, 0, 0.9)';
        stickyHeaderImg.classList.add('fadeInDown', 'active');

    } else {
        navbar.classList.remove("sticky");
        stickyHeader.style.background = 'rgb(0, 0, 0, 0.5)';
        stickyHeaderImg.classList.remove('fadeInDown', 'active');
    }
    }

    // //Listen for a click event on chinese
    // document.querySelector('#asian').addEventListener('click', function (e) {
    //     e.preventDefault();
    //     const getChinese = document.querySelector('.asian');
    //     getChinese.classList.toggle('hidden');
    // })
    //  //Listen for a click event on japanese
    // document.querySelector('#japanese').addEventListener('click', function (e) {
    //     e.preventDefault();
    //     const getJapanese = document.querySelector('.japanese');
    //     getJapanese.classList.toggle('hidden');
    // })
    // //Listen for a click event on italian
    // document.querySelector('#italian').addEventListener('click', function (e) {
    //     e.preventDefault();
    //     const getItalian = document.querySelector('.italian');
    //     getItalian.classList.toggle('hidden');
    // })
    // //Listen for a click event on burger
    // document.querySelector('#burger').addEventListener('click', function (e) {
    //     e.preventDefault();
    //     const getBurger = document.querySelector('.burger');
    //     getBurger.classList.toggle('hidden');
    // })
    // //Listen for a click event on cafe
    // document.querySelector('#cafe').addEventListener('click', function (e) {
    //     e.preventDefault();
    //     const getCafe = document.querySelector('.cafe');
    //     getCafe.classList.toggle('hidden');
    // })


    //Get all the cuisine box class name
    const cuisine = document.getElementsByClassName('cuisine-box');
    console.log(cuisine);
    
    for (var i = 0; i < cuisine.length; i++) { //Using a for loop to count how many class are there in the DOM
        
        cuisine[i].addEventListener('click', foodHidden, false); //listens for a click function of each array
         
        // cuisine[i].addEventListener('click', reset, false);

    }

    
    // function reset(e) {
    //     const containFilter = this.classList.contains('activate-filter')
    //     console.log(containFilter);

        
    //     if(cuisine[e] != containFilter){
    //         this.classList.remove('activate-filter');
    //     } else if (cuisine[e] === containFilter){
    //         this.classList.add('activate-filter');
    //     }

    //     const containFilter = this.classList.contains('activate-filter')
    //     const containHidden = document.querySelector('.food-list').classList.contains('hidden')
        
    //     console.log(containHidden);
        
    //     if(prev[e] != containHidden){
    //         containHidden.classList.add('activate-filter');
    //     } else if (prev[e] === containHidden){
            
    //         console.log('there is a class')
    //     }
        
    // }


    function foodHidden(e) { 
        e.preventDefault();

        const circleBox = this.querySelector('.circle-box'); //Get the selected circle box from a click listener
        const cuisineBox = this.querySelector('.cuisine-box');
        // const foodList = document.getElementsByClassName('food-list');

        // circleBox.classList.toggle('activate-filter'); //Toggle activated filter
        // .not(this).removeClass('active')
        this.classList.toggle('activate-filter');

        var iconID = this.getAttribute('data-id'); //Get data id atrribute
        // console.log(iconID);
        const showFood = document.querySelectorAll('#food-' + iconID);
        // console.log(showFood);
        const showfooFood = document.querySelector('#food-' + iconID).classList.toggle('hidden');

        const prev = document.querySelector('#food-'+ iconID).previousElementSibling; // #foo1
        // console.log(prev);

        const next = document.querySelector('#food-'+ iconID).nextElementSibling; // #foo3
        // console.log(next);

        
        // for (var i = 0; i < foodList.length; i++) {
        //     foodList[i].addEventListener('click', showFood, false);
        // }

        // function showFood(e) { 
        //     e.preventDefault();
        //     const food = document.querySelector('.food-List');
        //     food.classList.toggle('hidden');
        //  

        // var getSiblings = function (elem) {
        //     var siblings = [];
        //     var sibling = elem.parentNode.firstChild;
    
        //     for (; sibling; sibling = sibling.nextSibling) {
        //         if (sibling.nodeType !== 1 || sibling === elem) continue;
        //     siblings.push(sibling);
        //     }
    
        //     return siblings;
        // };
    
        // var elem = document.querySelector('#description-' + iconID);
        // var siblings = getSiblings(elem);
        // console.log(siblings);

     }


    // $('#description-' + iconID).toggle().siblings().hide();

    //Hover function on the pizza map
    // const firstDot = document.querySelector('.featured-circle');
    // const secondDot = document.querySelector('second-dot');
    // const thirdDot = document.querySelector('third-dot');
    // const fourthDot = document.querySelector('fourth-dot');
    // const map1 = document.querySelector('#map-1');
    // const map2 = document.querySelector('#map-2');
    // const map3 = document.querySelector('#map-3');
    // const map4 = document.querySelector('#map-4');

    // firstDot.addEventListener('mouseover', function (e) { //check for an event hover
    //     e.preventDefault();
    //     map1.classList.toggle('faded');

    //  // reset the color after a short delay
    // setTimeout(function() {
    //     map1.classList.toggle('faded');
    //   }, 500);
    // }, false);

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

    //Pizza map hover functions and effects

    $('.first-dot').hover( function () {
        $('#map-1').toggleClass('faded');
    });

    $('.second-dot').hover( function () {
        $('#map-2').toggleClass('faded');
    });
    
    $('.third-dot').hover( function () {
        $('#map-3').toggleClass('faded');
    });
    
    $('.fourth-dot').hover( function () {
        $('#map-4').toggleClass('faded');
    });

    //Jquery method to add filter if it's not being selected
    // $('.cuisine-box').click(function() { 
    //     $('.cuisine-box').not(this).addClass('activate-filter')
    //     // $(this).toggleClass('activate-filter')
    //     // $('.food-list').addClass('hidden');
    //     const sib = $('.food-list').siblings()
    //     console.log(sib);
    // })

    $(window).scroll(function() {
        var calculation = $(window).scrollTop() / $(document).height() * 1200
        $('.mushroom-icon img').css('transform', 'translateY(' + calculation + 'px)')

        // transform: translateY(200px);
    });
    
});
