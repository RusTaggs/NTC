
  var autoplay = 5000;
    var mySwiper = new Swiper('.swiper-container', {
        
      autoplay: {
        delay: autoplay,
        disableOnInteraction: false,
      },
      speed: 500,
      loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          
        },
       
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          
        },
       
        
      });

      

      (function svg_map_load(){
        var $container = $('.svg-map');
        if (!$container.length) return;
      
        function init() {
          $.get('/assets/components/ntcees/map.svg', function(data) {
            var svg = $(data).find('svg');
            
            $container.prepend( svg ).addClass('svg-map_ready');
            $(document).trigger( "svgmap:ready", [ "Custom", "Event" ] );
          });
        }
      
        init();
      })();
      
      
      (function svg_map_home(){
        var num = $('.panel_home-map .projects-count__num [data-value]');
        var region_name = $('.panel_home-map .projects-count__region [data-value]');
        var count_title = $('.panel_home-map .projects-count__title [data-value]');
        var url = $('.svg-map_home').data('url');
        
        $(document).on('mouseenter', '.svg-map_home polygon, .svg-map_home path', function(event) {
          var reg_id = $(this).data("id"),
              result = $.grep(NTCEES.regions, function(e){ return e.map_area == reg_id; });
      
          if (result.length) {
            
      
            if (result[0].projects > 0) {
              num.text( result[0].projects );
              region_name.text( result[0].string );
              count_title.text( result[0].title );
            } else {
              num.text( num.data('default') );
              region_name.text( region_name.data('default') );
              count_title.text( count_title.data('default') );
            }
          }    
        });
        
        $(document).on('mouseleave', '.svg-map_home polygon, .svg-map_home path', function(){
          num.text( num.data('default') );
          region_name.text( region_name.data('default') );
          count_title.text( count_title.data('default') );
        });
        
        $(document).on('click', '.svg-map_home polygon, .svg-map_home path', function(){
          window.location = url + '?map_area=' + $(this).data('id');
        });
      })();