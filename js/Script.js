// $(document).ready(function() {
 
//   $("#owl-example").owlCarousel({
//       items:1,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:true,
//     dots: true,
//      nav:true,
//       navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
   
//   });
// });
$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
      items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dots: true,
     nav:true,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
   responsive: {
          0:{
              items:1
          },
         450:{
               items:2
           },
           600:{
               items:2
           },
           991:{
               items:3
           },
           1200:{
               items:4
           }
    }
  });



});