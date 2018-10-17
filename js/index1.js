//用户登录下拉
$(function(){
    $('.ulRight').hover(function(){
        $(this).find('.user-dropdown ').fadeIn('slow');
    }, function(){
        $(this).find('.user-dropdown').fadeOut('slow');
        $(this).find('.user-dropdown').stop(true, true);
    });
});


// 二级菜单
    $('#header-nav').find('.navLink').mouseenter(function () {
        $(this).find('.item').fadeIn();
        $(this).siblings('li').find('.item').fadeOut();
        $('.header').css({'background':'#fff','height':'260px','color':'#515151'},{'border-bottom':'1px solid #666'})
        $('.header').siblings('li').css({'background':'','height':''})

    });
    $('#header-nav').mouseleave(function () {
        $(this).find('.item').fadeOut();
        $(this).find('.item').stop(true,true)
        $('.header').css({'background':'','height':''})

    });


//    回到顶部
$(document).ready(function() {

    //为当前窗口添加滚动条滚动事件
    $(window).scroll(function() {
        var scroTop = $(window).scrollTop();

        if (scroTop > 1000) {
            $('.site-gotop').fadeIn(500);
        } else {
            $('.site-gotop').fadeOut(500);
        }
    })

    //为返回顶部元素添加点击事件
    $('.site-gotop').click(function() {
        //将当前窗口的内容区滚动高度改为0，即顶部
        $("html,body").animate({
            scrollTop: 0
        }, "fast");
    });
});





