$(document).ready(function(){

    
    var headerSwiper = new Swiper('.swiper-container__main', {
        
      spaceBetween: 0,
      speed: 500,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
       
      
        // Navigation arrows
        navigation: {
          nextEl: '.nxt_main',
          prevEl: '.prv_main',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.main-scrollbar',
          hide: false,
          dragSize: 'auto'
        },
       
        
    });
    
    var newsSwiper = new Swiper('.swiper-news-container', {
      
      effect: 'coverflow',
     
      spaceBetween: 50,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      scrollbar: {
        el: '.news-scrollbar',
        hide: false,
      },
      navigation: {
          nextEl: '.nxt_news',
          prevEl: '.prv_news',
        },
      pagination: {
        el: '.swiper-news-pagination',
        type: 'fraction'
      },
      
    });
    var projectsSwiper = new Swiper('.swiper-projects-container', {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 3,
      slideClass: 'project-slide',
      
      pagination: {
        el: '.swiper-projects-pagination',
        type: 'fraction'
      },
      scrollbar: {
        el: '.projects-scrollbar',
        hide: false,
        dragSize: 'auto'
      },
      navigation: {
        nextEl: '.nxt_projects',
        prevEl: '.prv_projects',
      },
    });
      
    $('.project-slide').hover(function(){
      $(this).find('.projects-bg-img').addClass('active')
    }, function(){
      $(this).find('.projects-bg-img').removeClass('active')
    }
    );
});