$(function(){
    $('.top-sliders').slick({
        arrows: false,
        dots: true,     
        // responsive: [
        //     {
        //       breakpoint: 675,
        //       settings: {
        //         swipe: false,
        //       }
        //     },
        //   ]
    })
    $('.top__slider-cities-inner').slick({   
        responsive: [          
            {
              breakpoint: 675,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 540,
                settings: {
                    arrows: false,
                    slidesToShow:2,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: true,
                }
              },
            {
                breakpoint: 2280,
                settings: "unslick"
              },
          ]
    })

 

    $('.questions__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false,
        responsive: [          
            {
              breakpoint: 1080,
              settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
              }
            },
            {
                breakpoint: 635,
                settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  centerMode: false,
                }
              },
          ]
    })


    $('.header__menu-item--more').on('click', function(){
        $(this).toggleClass('header__menu-item--more-open');
        $('.submenu__header-list').toggleClass('on-flex');
      
    })

    // $(document).mouseup( function(e){ // событие клика по веб-документу
	// 	var ul = $("#drop-menu"); // тут указываем ID элемента
        
	// 	if ( !ul.is(e.target) // если клик был не по нашему блоку
	// 	    && ul.has(e.target).length === 0 ) { // и не по его дочерним элементам
    //             ul.hide(); // скрываем его
	// 	}
	// });


    $('.header__burger-wrapper').on('click', function(){ 
        $('.burger__menu').toggleClass('on-flex');

        // $('.product-list__filter ').toggleClass('hidden');
        // $('.main').toggleClass('off');
        $('.header__burger').toggleClass('header__burger--active');
      });


});