//jquery scroll

var slides = [1, 2, 3, 4];

$.each(slides, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
         if ( docScroll1 >= offsetSection ){
             $('li a').removeClass('active');
             $('li a:link').addClass('inactive');  
             $('li a').eq(index).addClass('active');
             $('li a:link').eq(index).removeClass('inactive');
         }  
     });
    $('li a').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 800) 
    });
});

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}