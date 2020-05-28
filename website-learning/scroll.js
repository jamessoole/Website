(function($){
  
    $('[data-bound]').each(function(){
      
      const $elem = $(this);
      const $bound = $( $elem.data('bound') );
      
      $(window).scroll(function(){
        
        const scrollTop = $(window).scrollTop();
        const boundTop = $bound.offset().top;
        const boundHeight = $bound.height();
        const windowHeight = $(window).height();
        const delta = (scrollTop - boundTop) + windowHeight;
        
        console.log({
          scrollTop,
          boundTop,
          delta,
        });
        
        if( delta > 0 ){
          $elem.css('bottom', delta);
        }
        else{
          $elem.removeAttr('style');
        }
        
      });
      
      
    });
    
  })(jQuery);