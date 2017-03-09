
/**
 * af.splashscreen 
 * @copyright Intel 2014 
 * 
 */
(function($){
    "use strict";
    $.afui.ready(function(){
        //delay to hide the splashscreen
        setTimeout(function(){
            $("#splashscreen").fadeOut(200);
        },1000);
    });
})(jQuery);