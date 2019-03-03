(function($){
    var title=$('.title');
    var news_bc=$('.bc').children('ul').find('li');
   
    var news_kind=$('.news_kind').children('li');





    news_bc.on('click',function(e){
        e.preventDefault();
        var news_order=news_bc.index(this);
        console.log(news_order);

        news_bc.eq(news_order).addClass('active');
        news_bc.eq(news_order).siblings().removeClass('active');

        news_kind.eq(news_order).css({display:'block'});
        news_kind.eq(news_order).siblings().css({display:'none'});

        title.scrollTop(0);

        
       



    })







    


})(jQuery);