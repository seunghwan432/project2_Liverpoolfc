// home.js
(function ($) {
    // 메인베너 자동슬라이드 페이드인 페이드아웃 기능
    $('.main_banner_ul').children('li').css({ display: 'none' });
    var main_banner_len = $('.main_banner_ul').children('li').length;
    var main_banner_order = 0;
   


    var banner_fn = (function () {
        if (main_banner_order >= main_banner_len) {
            main_banner_order = 0;
        }
        $('.main_banner_slide').animate({width:100+'%' },10000,function(){
            $('.main_banner_slide').css({width:0})
            
        } )
        $('.main_banner_ul').children('li').eq(main_banner_order).fadeIn(800);
        $('.main_banner_ul').children('li').eq(main_banner_order).siblings().fadeOut(800)
       
      



        main_banner_order += 1;
    });

    setTimeout(banner_fn, 0);
    setInterval(banner_fn, 10000);
// -------------------------------------------

// 메인화면  뉴스 호버시 효과
$('.home_news_img').mouseover(function(){
    $(this).css({opacity:0.7});
    $(this).siblings('.home_news_text').stop(true,false).animate({top:220+'px'});
    $(this).siblings('.home_news_text').find('.hidden_news').fadeIn();
});

$('.home_news_img').mouseleave(function(){
    $(this).css({opacity:0.9});
    $(this).siblings('.home_news_text').stop(true,false).animate({top:280+'px'});
    $(this).siblings('.home_news_text').find('.hidden_news').fadeOut();
});


    

})(jQuery);