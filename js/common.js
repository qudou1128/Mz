$('#header').load('header.html',function () {
    //用户中心
    $('.nav-right').find('.usertent').mouseenter(function () {  // 鼠标划入li中的左侧内容
       $(this).find('.hoverShowSon').find('ul').fadeIn()  // 当前li对应的右侧内容显示
})
    $('.nav-right').mouseleave(function () { // 移出菜单时，将右侧的内容全部消失
        $(this).find('ul').fadeOut();
        $(this).find('.hoverShowSon').find('ul').stop(true,true)
})


    // 二级菜单

    $('#nav').load('header.html',function () {
        //用户中心
        $('.nav-right').find('.usertent').mouseenter(function () {  // 鼠标划入li中的左侧内容
            $(this).find('.hoverShowSon').find('ul').fadeIn()  // 当前li对应的右侧内容显示
        })
        $('.nav-right').mouseleave(function () { // 移出菜单时，将右侧的内容全部消失
            $(this).find('ul').fadeOut();
            $(this).find('.hoverShowSon').find('ul').stop(true,true)
        })

