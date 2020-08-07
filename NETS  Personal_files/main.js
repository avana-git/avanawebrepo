$(document).ready(function() {

    // Locate Us Mark Popover

    // $('.locate-us .map #location-popover').hide();
    $('.locate-us .map p').popover({
        content: $('.locate-us .map #location-popover'), 
        placement: 'right',
        html: true
    });
    
    $('.locate-us .map p').on('shown.bs.popover', function () {
        $('.popover .arrow').css('top', '20px');
    });

    $('.locate-us .map p').on('show.bs.popover', function () {

        $('#location-popover').removeClass('d-none');
        var self = this;
        $('#location-popover .close').on('click', function() {
            $(self).popover('hide');
        });
    })



	// arrow down animation
    var lastScrollPos = 0;

    var scrolling = false;

    $(window).on('scroll', function(e) {
        scrolling = true;
    });

    setInterval( function() {
      if ( scrolling ) {
        scrolling = false;
        var pos = $(this).scrollTop();
        if(lastScrollPos > pos && pos > 0) {
            $('.component-container.breadcrumb').removeClass(['hidden']);
            if($('.main-wrapper').css('padding-top') == '85px') {
                $('.main-wrapper').css('padding-top', $('.breadcrumb').height() + 70);
            }

        } else {
            if($(window).width() >= 767 && pos > 90) {
                // no need for desktop
            } else if($(window).width() < 767 && pos > $('.breadcrumb').height()) {
                $('.component-container.breadcrumb').addClass(['hidden']);
                if($('.main-wrapper').css('padding-top') == '85px') {
                    $('.main-wrapper').css('padding-top', '');
                }
            }
        }

        lastScrollPos = pos;
      }
    }, 250 );

    $('.arrow-down').on('mouseover', function(){
        $(this).addClass('effect arrow-down--effect');
        $('.arrow-down--items').removeClass('hide');
    });

    $('.arrow-down').on('mouseout', function(){
        $(this).removeClass('effect arrow-down--effect');
        $('.arrow-down--items').addClass('hide');
    });
    // $('.arrow-down ul a').on('mouseover', function(e) {
    //     e.stopPropagation();
    // });

    $('.js-offcanvas-trigger').on('click', function(e) {
        $('.sidebar').toggleClass("show");
        $('.content-wrapper').toggleClass("sidebar-opened");
        $('.notice-message').toggleClass("sidebar-opened");
    });

    $('.nav-login').hover(function() {
        $('.nav-login .dropdown-menu').toggleClass('show');
    });
    // Show and Hide Sub-Menu
    var hoverTimeout = false;
    $(".submenu ul li").css('display','none'); 
    // $(".submenu .navbar").css('padding', '0px');  
    // $(".main-menu a[data-navbar-item]").on({
    //     mouseover: function() {
    //         var attr = $(this).attr('data-navbar-item');
    //         console.log(attr);
    //         if(attr == 'Personal') {
    //             $('.submenu').removeClass('hide');
    //             $('.submenu a').each(function(index){
    //                 if(index <=3)
    //                     $(this).parent().css('display','block');
    //                     // console.log($(this).data('navbar-item'));
    //             });   
                
    //         }else if(attr == 'Developers') {
    //             $('.submenu').removeClass('hide');
    //             $('.submenu a').each(function(index){
    //                 if(index >3)
    //                     $(this).parent().css('display','block');
    //                     // console.log($(this).data('navbar-item'));
    //             });   
                
    //         }else {
    //             $('.submenu').addClass('hide');
    //         }
          
    //     },
    //     mouseout: function() {
    //         $(".submenu ul li").css('display','none');  
    //         // $(".submenu .navbar").css('padding', '0px');
    //         $('.submenu').addClass('hide');
    //     }
    // });
    var showhideMenuItem = function($this) {
        var attr = $($this).attr('data-navbar-item');
        
        $('.submenu .nav-item').removeClass('business-theme');
        if(attr == 'Personal') {
            $('.submenu').removeClass('hide');

            // if($(window).width() >= 2550) {
            //     console.log($(window).width());
            //     $('.submenu').css('left','17.5%');
            //     // $('.submenu').css('left','11%');
            // }else if($(window).width() > 2400 && $(window).width() < 2550 ){
            //     $('.submenu').css('left','16.5%');
            // }else if($(window).width() > 2300 && $(window).width() <= 2400 ){
            //     $('.submenu').css('left','14.5%');
            // }else if($(window).width() > 2250 && $(window).width() <= 2300 ){
            //     $('.submenu').css('left','14%');
            // }else if($(window).width() > 2230 && $(window).width() <= 2250 ){
            //     $('.submenu').css('left','13.5%');
            // }else if($(window).width() >= 2200 && $(window).width() <= 2230 ){
            //     $('.submenu').css('left','12%');
            // }else if($(window).width() > 2100 && $(window).width() < 2200 ){
            //     $('.submenu').css('left','10.6%');
            // }else if($(window).width() > 2000 && $(window).width() <= 2100 ) {
            //     $('.submenu').css('left','11%');
            // }else if($(window).width() >= 1800 && $(window).width() <= 2000 ) {
            //      $('.submenu').css('left','11.6%');
            // }else if($(window).width() > 1500 && $(window).width() < 1800 ) {
            //     // $('.submenu').css('left', '210px'); 
            //      $('.submenu').css('left', '12.5%');   
            // }else if($(window).width() >= 1300 && $(window).width() <= 1500) { 
            //     console.log($(window).width());
            //     $('.submenu').css('left','190px');
            // }else $('.submenu').css('left','170px'); //170
            

            $('.submenu .nav-item').each(function(index){
                // if(index <= 4)
                if($(this).find('a').attr('data-category') == 'personal')
                    $(this).css('display','block');
                else {
                    $(this).css('display','none'); 
                }

                // if(index == 4) {
                //     $(this).addClass('last-visible-item');
                // }
            });

            // $('.submenu .nav-item:visible').last().addClass('last-visible-item');
            
        }else if(attr == 'Business') {
            $('.submenu').removeClass('hide');

            if($(window).width() >= 2560) {
                // $('.submenu').css('left','20.5%');
                $('.submenu').css('left','21.5%');
            }else if($(window).width() > 2480 && $(window).width() < 2560) {
                $('.submenu').css('left','530px');
            }else if($(window).width() > 2400 && $(window).width() <= 2480) {
                $('.submenu').css('left','500px');
            }else if($(window).width() > 2340 && $(window).width() <= 2400) {
                $('.submenu').css('left','460px');
            }else if($(window).width() > 2300 && $(window).width() <= 2340) {
                $('.submenu').css('left','430px');
            }else if($(window).width() > 2200 && $(window).width() <= 2300) {
                $('.submenu').css('left','400px');
            }else if($(window).width() > 2100 && $(window).width() <= 2200) {
                $('.submenu').css('left','370px');
            }else if($(window).width() > 1500 && $(window).width() <= 2100) {
                $('.submenu').css('left','320px');
            }else if($(window).width() >= 1300 && $(window).width() <= 1500) {
                $('.submenu').css('left','300px');
            }else $('.submenu').css('left','280px');

            $('.submenu .nav-item').each(function(index){
                // if(index >= 5) {
                if($(this).find('a').attr('data-category') == 'business') {
                    $(this).addClass('business-theme');
                    $(this).css('display','block');
                    // if(index == 5) {
                    //     $(this).addClass('first-visible-item');
                    // }
                    // if(index == 8) {
                    //     $(this).addClass('last-visible-item');
                    // }
                }
                else {
                    $(this).css('display','none');  
                }
            });   
            
        }else if(attr == 'Finance') {
            $('.submenu').removeClass('hide');

            if($(window).width() >= 2560) {
                // $('.submenu').css('left','20.5%');
                $('.submenu').css('left','25%');
            }else if($(window).width() > 2480 && $(window).width() < 2560) {
                $('.submenu').css('left','670px');
            }else if($(window).width() > 2400 && $(window).width() <= 2480) {
                $('.submenu').css('left','640px');
            }else if($(window).width() > 2340 && $(window).width() <= 2400) {
                $('.submenu').css('left','600px');
            }else if($(window).width() > 2300 && $(window).width() <= 2340) {
                $('.submenu').css('left','570px');
            }else if($(window).width() > 2200 && $(window).width() <= 2300) {
                $('.submenu').css('left','540px');
            }else if($(window).width() > 2100 && $(window).width() <= 2200) {
                $('.submenu').css('left','510px');
            }else if($(window).width() > 1500 && $(window).width() <= 2100) {
                $('.submenu').css('left','460px');
            }else if($(window).width() >= 1300 && $(window).width() <= 1500) {
                $('.submenu').css('left','440px');
            }else $('.submenu').css('left','420px');

            $('.submenu .nav-item').each(function(index){
                // if(index >= 5) {
                if($(this).find('a').attr('data-category') == 'finance') {
                    $(this).addClass('business-theme');
                    $(this).css('display','block');
                    // if(index == 5) {
                    //     $(this).addClass('first-visible-item');
                    // }
                    // if(index == 8) {
                    //     $(this).addClass('last-visible-item');
                    // }
                }
                else {
                    $(this).css('display','none');  
                }
            });   
            
        }else {
            $('.submenu').addClass('hide');
            $(".submenu .nav-item").css('display','none');  
        }

        if(attr == 'Finance'){
		$('.submenu').css('left', ($($this).offset().left - ($('.submenu').width()/2)) + 60);
	}
	else{
	        $('.submenu').css('left', ($($this).offset().left - ($('.submenu').width()/2)) + 30);
	}
    };

    $(".main-menu a[data-navbar-item]").hover(function(e) {
        console.log("hover !!!")
        if(hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
        showhideMenuItem($(this));
    	// $('.submenu').removeClass('hide');
    }, function(e) {
        hoverTimeout = setTimeout(function() {
            $('.submenu').addClass('hide');
            $(".submenu ul li").css('display','none');  
        }, 500);
    });

    $('.submenu').hover(function(e) {
        clearTimeout(hoverTimeout);
        // showhideMenuItem($(this));
    }, function(e) {
        hoverTimeout = setTimeout(function() {
            $('.submenu').addClass('hide');
            $(".submenu ul li").css('display','none');  
        }, 500);
    });

    // Search icon 
    $('#icon-search .icon-search-btn').on('click', function() {
   		$('.search-box').removeClass('hide');
        $('.arrow-down').addClass('hide');
        $('#icon-search').addClass('open');
        $('.start-using-nets').css('z-index', 1);
    });

    $('#icon-search .icon-close-btn').on('click', function() {
        $('.start-using-nets').css('z-index', 4);
		$('.search-box').addClass('hide');
        $('.arrow-down').removeClass('hide');
        $('#icon-search').removeClass('open');
    });

    $('#icon-search-xs .icon-search-btn').on('click', function() {
        $('.navbar-toggler-wrapper').addClass('hide');
        $('.navbar-brand').addClass('hide');
        $('.search-box-xs').removeClass('hide');
        $('#icon-search-xs').addClass('open');
    });

    $('#icon-search-xs .icon-close-btn').on('click', function() {
        $('.navbar-toggler-wrapper').removeClass('hide');
        $('.navbar-brand').removeClass('hide');
        $('.search-box-xs').addClass('hide');
        $('#icon-search-xs').removeClass('open');
    });

    $('.nets-btn').on('click', function() {
        $('.nets-btn-menu').toggleClass('hide');
    });

    $('.icon-login-btn').on('click', function() {
        $('.nets-btn-login').toggleClass('hide');
    });

    $('.menu .personal').on('click', function() {
        $('.personal-sub-menu').toggleClass('hide');
    });

    $('.menu .business').on('click', function() {
        $('.business-sub-menu').toggleClass('hide');
    });
    $('.menu .business li a').on('click', function(e) {
        e.stopPropagation();
    });

    $('.menu .finance').on('click', function() {
        $('.finance-sub-menu').toggleClass('hide');
    });
    $('.menu .finance li a').on('click', function(e) {
        e.stopPropagation();
    });

    if($('.component-container.notice-message').length > 0) {
        if(!$('.component-container.notice-message').hasClass("hide")) {
            $(".main-wrapper").addClass("margin-top-145px");
        } else {
            $(".main-wrapper").removeClass("margin-top-145px");
        }

        $('#notice-message--close').on('click', function(e) {
            
            if($(".main-wrapper").hasClass('margin-top-85px--campaign')) {
                $(".main-wrapper").removeClass('margin-top-85px--campaign').css({
                    'margin-top': '60px',
                    'transform': 'none'
                })
            } else {
                $(".main-wrapper").removeClass("margin-top-145px");
                $(".main-wrapper").addClass("margin-top-60px");    
            }

            $('.component-container.notice-message').addClass("hide");
        });
    }

    $('#promotion-listing-category .dropdown-item').on('click', function(e) {
        var category = $.trim($(e.currentTarget).attr('data-category'));
        $('#promotion-listing--container--norecordfound').css("display", 'none');
        if(category == 'all') {
            $('.square-image-container').parent().removeClass("hide");
            $('.square-image-container').removeClass("hide");
            $('#promotion-listing-category #dropdownMenuButton .btn-label').text("Select Category");
            return void 0;
        }

        $('#promotion-listing-category #dropdownMenuButton .btn-label').text($.trim($(e.currentTarget).text()));

        $('.square-image-container[data-category!="'+ category +'"]').addClass("hide");
        $('.square-image-container[data-category!="'+ category +'"]').parent().addClass("hide");
        $('.square-image-container[data-category="'+ category +'"]').parent().removeClass("hide");
        $('.square-image-container[data-category="'+ category +'"]').removeClass("hide");
        
        if($('.square-image-container[data-category="'+ category +'"]').length < 1) {
            $('#promotion-listing--container--norecordfound').css("display", '');
        }
        
    });

    if($('.component-container.hero-banner').length > 0) {
        var width = $('.component-container.hero-banner').width() - $('.component-container.hero-banner >.component-wrapper').width();

        $('.personal-business-services--content-left').css('margin-left', width/2);
        $('.personal-business-services--content-right').css('margin-right', width/2);
    }

    if(typeof Swiper != 'undefined') {
        if($('.swiper-container--horizontal').length > 0) {
            var swiper = new Swiper('.swiper-container--horizontal', {
                slidesPerView: 1,
                spaceBetween: 0,
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-container--horizontal .swiper-pagination',
                    clickable: true,
                }
            });
        }

        if($('.swiper-container--vertical').length > 0) {
            var swiper_vertical = new Swiper('.swiper-container--vertical', {
                slidesPerView: 1,
                spaceBetween: 0,
                direction: 'vertical',
                freeMode: true,
                resistance: false,
                resistanceRatio: 0,
                freeModeMomentumBounce: false,
                freeModeMomentumBounce: 0,
                height: Math.max.apply(null, $('.swiper-container--vertical .swiper-slide').find('p').map(function (){return $(this).height();}).get()),
                // autoHeight: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-container--vertical .swiper-pagination',
                    clickable: true,
                },
                // watchSlidesProgress:true,
                // onProgress: function(swiper, progress){
                //     for (var i = 0; i < swiper.slides.length; i++){
                //         var slide = swiper.slides[i];
                //         var translate, boxShadow, boxShadowOpacity;
                //         if (progress>0) {
                //             translate = progress*swiper.width;
                //             boxShadowOpacity = 0;
                //         }
                //         else {
                //             translate = 0;
                //             boxShadowOpacity = 1  - Math.min(Math.abs(progress),1);
                //         }
                //         $(slide).css({ boxShadow: '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')',
                //          transform: 'translate3d(' + translate + 'px,0,0)' });

                //     }
                // },
                // onTouchStart: function(swiper){
                //     for (var i = 0; i < swiper.slides.length; i++){
                //         $(swiper.slides[i]).css({ transition: 'none' });
                //     }
                // },
                // onSetTransition: function(swiper, speed) {
                //     console.log("onset transition");
                //     for (var i = 0; i < swiper.slides.length; i++){
                //         $(swiper.slides[i]).css({ transition: 'all ' + speed + 'ms linear' });
                //     } 
                // },
                on: {
                    init: function () {
                        // $('.swiper-container--vertical .swiper-slide').each(function(item, slide) {
                        //     $(slide).height($(slide).find('p').height());
                        // });
                    }
                }
            });

            swiper_vertical.updateAutoHeight();

            $(window).resize(function() {
                var height = Math.max.apply(null, $('.swiper-container--vertical .swiper-slide').find('p').map(function (){return $(this).height();}).get());
                $('.swiper-container--vertical .swiper-wrapper').css('height', height);
                $('.swiper-container--vertical .swiper-slide').css('height', height);
                swiper_vertical.params.height = height;
                swiper_vertical.updateAutoHeight();
            });
        }
    }

    if($('.accordion').length > 0) {
        $('.accordion').each(function() {
            $(this).parent().find('.btn-expand').on('click', function(e) {
                var target = $(e.currentTarget).parent().parent().find('.btn-link').attr('data-target');
                console.log(target);
                $(target).collapse('show');
            });

            $(this).parent().find('.btn-collapse').on('click', function(e) {
                var target = $(e.currentTarget).parent().parent().find('.btn-link').attr('data-target');
                console.log(target);
                $(target).collapse('hide');
            });

            $(this).find('.card-header').on('click', function(e) {
                var target = $(e.currentTarget).find('.btn-link').attr('data-target');
                console.log(target);
                $(target).collapse('show');
            });

            $(this).find('.card-header').on('click', function(e) {
                var target = $(e.currentTarget).find('.btn-link').attr('data-target');
                console.log(target);
                $(target).collapse('hide');
            });
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(this).parent().find('.btn-expand').removeClass('hide');
            $(this).parent().find('.btn-collapse').addClass('hide');  
        });

        $('.collapse').on('shown.bs.collapse', function () {
            $(this).parent().find('.btn-expand').addClass('hide');
            $(this).parent().find('.btn-collapse').removeClass('hide');
        });

        
    }


    var footerHeight = $(window).height() - $('.main-wrapper').height(); 
    if(footerHeight > $('.component-container.footer').height()) {
        $('.component-container.footer').height(footerHeight);    
    }
    
    $('.netspay-faq #email').on('click', function(){
        $('.faq-email-us').removeClass('hide');
        $('.faq-map').addClass('hide');
        $('.faq-call-us').addClass('hide');
        $(this).removeClass('btn-secondary').addClass('btn-primary');
        $('.netspay-faq #visit').removeClass('btn-primary').addClass('btn-secondary');
        $('.netspay-faq #call').removeClass('btn-primary').addClass('btn-secondary');
    });

    $('.netspay-faq #call').on('click', function() {
        $('.faq-email-us').addClass('hide');
        $('.faq-map').addClass('hide');
        $('.faq-call-us').removeClass('hide');
        $(this).removeClass('btn-secondary').addClass('btn-primary');
        $('.netspay-faq #visit').removeClass('btn-primary').addClass('btn-secondary');
        $('.netspay-faq #email').removeClass('btn-primary').addClass('btn-secondary');
    });

    $('.netspay-faq #visit').on('click', function() {
        $('.faq-email-us').addClass('hide');
        $('.faq-call-us').addClass('hide');
        $('.faq-map').removeClass('hide');
        $(this).removeClass('btn-secondary').addClass('btn-primary');
        $('.netspay-faq #email').removeClass('btn-primary').addClass('btn-secondary');
        $('.netspay-faq #call').removeClass('btn-primary').addClass('btn-secondary');
    });
    
    $('.leadership-show').on('click', function() {
    	if ($(this).hasClass("show-more")) {
		  $(this).removeClass("show-more").addClass("show-less");
		  $(this).html('Show Less');
    	}
	   else {
	    	$(this).removeClass("show-less").addClass("show-more");
		    $(this).html('Show More');
	    }
    });

    $('.bank-partners-details .arrow').on('click', function() {
        var data = $(this).parent().parent().attr("data-target");

        if ($(this).hasClass("show-more")) {
            $(this).removeClass("show-more").addClass("show-less");
            $('[data-target="' + data + '"] .details').removeClass('hide');
        }
       else {
            $(this).removeClass("show-less").addClass("show-more");
            $('[data-target="' + data + '"] .details').addClass('hide');
        }
    })

    $('.bank-partners-details .details .btn').each(function(index, item) {
        $(item).on('click', function() {
            $('#redirectThirdPartiesModal').modal('show');
            var url = $(this).attr("data-url");
            $('.redirected-btn').attr('href', url);
        });
    });

    $('a.bank-partners-popup-link').each(function(index, item) {
        $(item).on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('#redirectThirdPartiesModal').modal('show');
            var url = $(this).attr("href");
            $('.redirected-btn').attr('href', url);
            return false;
        });
    });

    $('.locate-us #search-location, .locate-us #search-location-mobile').on({
        keyup: function(e) {
            if(e.target.value == '') {
                $('.cross-sign').addClass('hide');
                $('.icon-search').removeClass('hide');
                if($(window).width() >= NETSMap.globalvar.widthResponsive) {
                    $('.locate-us .search-list').removeClass('d-none');
                    $('.locate-us .search-result').addClass('d-none');    
                }
            }else {
                $('.cross-sign').removeClass('hide');
                $('.icon-search').addClass('hide');
            }
        },
        keydown: function(e) {
            if(e.which == 13) {
                if($(window).width() >= NETSMap.globalvar.widthResponsive) {
                    $('.locate-us .search-list').addClass('d-none');
                    $('.locate-us .search-result').removeClass('d-none');
                }
            }
        }

    });

    $('.locate-us .cross-sign').on({
        click: function(e) {
            $('.locate-us #search-location, .locate-us #search-location-mobile').val('');
            $('.cross-sign').addClass('hide');
            $('.icon-search').removeClass('hide');
            if($(window).width() >= NETSMap.globalvar.widthResponsive) {
                $('.locate-us .search-list').removeClass('d-none');
                $('.locate-us .search-result').addClass('d-none');
            }
        }
    });

    $('.downslide-drawer .circle').on('click', function() {
        $('.sidePane_bottom').toggleClass('active');
        // $('.downslide-drawer').toggleClass('clear-height');
        $(this).toggleClass('change-top');
    });

    $('.locate-us .hamburger').on('click', function() {
        $(this).toggleClass('clicked-hamburger');
        if($(this).hasClass("clicked-hamburger")) {
            $('.sidePane').css('position', 'relative');
            $('.result .search-list').css('height', $('.map').height());
        } else {
            $('.result .search-list').css('height', 0);
        }
        $('.result .search-list').toggleClass('show');
        if($(window).width() < NETSMap.globalvar.widthResponsive) {// && $(this).hasClass('clicked-hamburger')
            $('.sidePane_bottom').removeClass('active');
            $(this).removeClass('change-top');
            $('.sidePane_facility_details').css({'marginLeft': $(window).width(), 'opacity': 0});
        }
        showListPanel();       
    });

    var mobileCheck = function() {
        check = false; 
        (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true})(navigator.userAgent||navigator.vendor||window.opera,'http://detectmobilebrowser.com/mobile');

        return check;
    }

    if(mobileCheck()) {
        $('.component-container.js-mobile-alignment').removeClass("justify-content-center").addClass("justify-content-end");

        //Blog FigCaption Click Effect
        $('.blog-nets-stories figure figcaption').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('figcaption--mouseover-effect');
        })
    }

    $('#search-global-text').on('keypress', function(e) {
        if(e.keyCode == 13) {
            location.href = '/search?q=' + encodeURIComponent($('#search-global-text').val());
        }
    });
    
    if($('.main-wrapper').css('padding-top') == '85px') {
        $('.main-wrapper').css('padding-top', $('.breadcrumb').height() + 70);
    }
    
});
