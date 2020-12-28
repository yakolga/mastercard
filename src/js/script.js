window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".navbar__wrapper"),
    menuItem = document.querySelectorAll(".navbar__wrapper_active"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("navbar__wrapper_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("navbar__wrapper_active");
    });
  });
});

function diplayHide (hidden) 
{ 
  if ($(hidden).css('display') == 'none') 
    { 
      $(hidden).animate({height: 'show'}, 500); 
  } 
  else 
    {     
      $(hidden).animate({height: 'hide'}, 500); 
  } 
}

(function($) {
$(function() {
  $('#getup').on('click', function() {
  $('.overlay, #app').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #app').fadeOut('slow');
});
});
})(jQuery);

$(function(){
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
    $('#scrollup').fadeIn();
  } else {
    $('#scrollup').fadeOut();
  }
});