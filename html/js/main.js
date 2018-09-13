document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.cuisine-list a').addEventListener('click', function (e) {
        e.preventDefault();
        console.log('clicked');
        
    })
 })


function clickNav() {
    document.querySelector('.button-container').classList.toggle('active');
    document.querySelector('#overlay').classList.toggle('open');
}


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

    //Food filter
    // $("input").change(function () { 
    //     const test = $( "#Chinese" ).attr( "checked" , true );
    //     if(test === 'true'){
    //         console.log('clicked');
    //     } else
    //     if(test === 'false'){
    //         console.log('hello');
    //     }
    //     console.log(test);
    // });
    
    $('#Chinese').on('change', function() { //Change the value of the element
        // console.log(this.value)
        // debugger
        
        
        // console.log(true)
        $('.chinese').removeClass('hidden');
        // if( test === true){
        //     $('.chinese').removeClass('hidden');
        // } else if( test === false){
        //     $('.chinese').removeClass('hidden');
        // }
    });
    
});
