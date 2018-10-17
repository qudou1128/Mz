//吸顶效果
var timer ;
       $(window).scroll(function () {
           clearTimeout(timer);
           if($(document).scrollTop() > 0){
               timer = setTimeout(function () {
                   $('#page').addClass("aaa");
                   console.log($(document).scrollTop());
               });
           }else{
               timer = setTimeout(function () {
                   $('#page').removeClass("aaa");
                   // console.log($(document).scrollTop());
               });
           }
       });

//返回顶部

$(document).ready(function() {

    //为当前窗口添加滚动条滚动事件
    $(window).scroll(function() {
        var scroTop = $(window).scrollTop();

        if (scroTop > 800) {
            $('#go').fadeIn(500);
        } else {
            $('#go').fadeOut(500);
        }
    })

    //为返回顶部元素添加点击事件
    $('#go').click(function() {
        //将当前窗口的内容区滚动高度改为0，即顶部
        $("html,body").animate({
            scrollTop: 0
        }, "fast");
    });
});



