$(document).ready(function() {
  
  $(".burger, .menu").click(function(){
    $(this).parent().find(".hide").stop().slideToggle();
    $('.burger').toggleClass('active');
  });

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 700, 'swing', function () {
      window.location.hash = target;
    });
  });

  $('#projects').isotope({
    itemSelector: '.project-item',
    layoutMode: 'fitRows'
  });
  
});