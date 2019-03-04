(function($){
    var title=$('.title');
    var news_bc=$('.bc').children('ul').find('li');
   
    var news_kind=$('.news_kind').children('li');




// 뉴스 종류별로 이동
    news_bc.on('click',function(e){
        e.preventDefault();
        var news_order=news_bc.index(this);
        console.log(news_order);

        news_bc.eq(news_order).addClass('active');
        news_bc.eq(news_order).siblings().removeClass('active');

        news_kind.eq(news_order).css({display:'block'});
        news_kind.eq(news_order).siblings().css({display:'none'});

        $('.m_story').css({display:'none'});

        title.scrollTop(0);
    });




    // 뉴스 상세페이지

    var main_news=$('.main_news');
    var story=$('#newsBox').children('ul');


    main_news.on('click',function(e){
        e.preventDefault();
        var main_news_parent=$(this).parent();
        var main_news_ancestor=main_news_parent.parent();
        console.log(main_news_ancestor.index());
        var num=main_news_ancestor.index();


        // news_kind.css({display:'none'});
        story.eq(num).css({display:'block'});


    

        

    });

    $('.back_btn').on('click',function(e){
        e.preventDefault();
        story.eq(0).css({display:'none'});
        story.eq(1).css({display:'none'});
        story.eq(2).css({display:'none'});

    });


  






    


})(jQuery);