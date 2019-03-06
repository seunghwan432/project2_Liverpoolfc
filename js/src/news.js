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


        news_kind.eq(num).css({display:'none'});
        story.eq(num).css({display:'block'});


    

        

    });

    $('.back_btn').on('click',function(e){
        e.preventDefault();
        var main_news_parent=$(this).parent();
        var main_news_ancestor=main_news_parent.parent();
        var num=main_news_ancestor.index();

        story.eq(0).css({display:'none'});
        story.eq(1).css({display:'none'});
        story.eq(2).css({display:'none'});
        news_kind.eq(num).css({display:'block'});


    });



    var story_left_top=$('.story_content').children('.story_left_top');
    


  
    var mql = window.matchMedia("screen and (max-width: 768px)");

mql.addListener(function(e) {
    if(e.matches) {
        console.log('모바일 화면 입니다.');
    } else {
        console.log('데스크탑 화면 입니다.');
    }
})

// 더보기 뉴스 슬라이드~
var m_n_b_l =$('.more_news_btn_left')
var m_n_b_r=$('.more_news_btn_right')
var m_n_u=$('.more_news_ul');
var m_n_l=$('.more_news_li');
var more_news_length=m_n_l.length;
var more_news_num=0;

console.log(more_news_length);


m_n_b_r.on('click',function(e){
    e.preventDefault();
    
    m_n_b_l.css({display:'block'});
    
    more_news_num+=1;
    console.log(more_news_num);
    m_n_u.animate({marginLeft:more_news_num*-33.3333333+'%'})
    if(more_news_num==more_news_length-3){
        m_n_b_r.css({display:'none'});
    }
    


});

m_n_b_l.on('click',function(e){
    e.preventDefault();
    
    more_news_num-=1;
    console.log(more_news_num);
    m_n_u.animate({marginLeft:more_news_num*-33.3333333+'%'})
    if(more_news_num==0){
        m_n_b_l.css({display:'none'});
    }
    if(more_news_num<more_news_length-3){
        m_n_b_r.css({display:'block'});
    }


});








    


})(jQuery);