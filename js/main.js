$(function(){
  $('.header_i,.header_i li,nav ').on({
    mouseover: function () {
        $('nav').stop().animate({ top: '100px' }, 500)
    },
    mouseout: function () {
        $('nav').stop().animate({ top: '-100%' }, 300)
    }
  });
  
  $('.menu').click(function () {
    $('.m_menu').css({ display: "block" })
  });
  
  
  $('.close').click(function () {
    $('.m_menu').css({ display: "none" })
  });

});