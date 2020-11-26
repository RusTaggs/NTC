$(document).ready(function(){

    
  var swiper = new Swiper(".swiper-container", {
    spaceBetween: 150,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function(index, className) {
        if (index > 10) {
          return (
            '<span class="' +
            className +
            '"><span class="fractions">' +
            (index + 1) +
            "</span></span>"
          );
        } else {
          return (
            '<span class="' +
            className +
            '"><span class="fractions">0' +
            (index + 1) +
            "</span></span>"
          );
        }
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

    $('#krasnoyarsk').hover(function() {
        $('.titleMain').html('Проекта');
        $('.proj-counter').html('4');
    }, function(){
      $('.titleMain').html('Проектов');
        $('.proj-counter').html('409');
    });
});
