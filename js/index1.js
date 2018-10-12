//用户登录下拉
$(document).ready(function () {
    $('#user').click(function () {
        $('#trigger').find('#dropdown').fadeOut(200);
    });

    $('#user').click(function () {
        $('#trigger').find('#dropdown').fadeIn(100);
    });
    $('#user').click(function () {
        $('#trigger').find('#dropdown').fadeToggle();
    });

});




//二级菜单
  $(document).ready(function () {
      $('#header-link li').mouseover(function(){
          var index =  $('#header-link li').index($(this)),
               divList = $('.data-sub').children('li');
               divList.hide();
               divList.eq(index).show();
               clearTimeout(test);
               divList.mouseover(function () {
                   // clearTimeout(test);
                   $(this).show();
               });
                divList.mouseover(function () {
                     clearTimeout(test);
                     $(this).hide();
          });
      });
       $('#header-link li').mouseout(function () {
           var index =  $('#header-link li').index($(this));
           divList = $('.data-sub').children('li');
           test = setTimeout(function () {
               divList.hide();
           },2000);
       });
  });



