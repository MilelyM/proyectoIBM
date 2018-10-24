$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $(".dropdown-trigger").dropdown({
    constrainWidth: false
  });
  $('.fixed-action-btn').floatingActionButton();
});
     