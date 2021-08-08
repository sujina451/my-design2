$(function() {
   var thumbnaill =  $('.thumbnaill');
   var container = $('.viewer-body');
   var close = $('.close');
   var next = $('.next');
   var prev = $('.prev');
  
   thumbnaill.click(function(){
    var content = $(this).html();
    thumbnaill.removeClass('open');
    $(this).addClass('open');
    $('body').addClass('view-open');
    container.html(content);
  });
    
  next.click(function() {
    var total = $('.media .thumbnaill').length;
   if ($('.open').index() === total- 1){
       $('.thumbnaill:last-child').addClass('open');
    }
  else{$('.open').removeClass('open').next().toggleClass('open');}
     var content = $('.open').html();
     container.html(content);
  });
  
  prev.click(function() {
    if ($('.open').index() == 0){$('.thumbnaill:first-child').addClass('open');}
    else{ $('.open').removeClass('open').prev().toggleClass('open');}
     var content = $('.open').html();
     container.html(content);
  });
  
   close.click(function() {$('body').removeClass('view-open'); });  
  
});