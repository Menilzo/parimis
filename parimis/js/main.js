$(document).ready(function(){

 //SCRIPT MENU HAMBURGER
  $('.menubouton').click(function(){
    $('.menu').toggleClass('active');
    $('.menubouton').toggleClass('toggle');
  });

  $('.recherche').click(function(){
    $('form:eq(0)').toggle();
  });
 //SCRIPT OVERLAY RESERVATION
  $('.book').click(function(){
    $('.overlaybooking').toggleClass('open');
  });

 $('.close').click(function(){
   $('.overlaybooking').toggleClass('open');
 });

 //DATEPICKER
 $( ".datepicker" ).datepicker({
   dateFormat: "dd-mm-yy"
 });

   //SCRIPT OVERLAY GAMMES CHAMBRE
   $('.chambreItem').click(function(){
     $(this).find('.overlay').toggleClass('overlaytoggle');
     $(this).find('.titrerotation').toggleClass('titrerotationselected');
     $(this).find('.plus').toggleClass('plusclique');
   });

   //SCRIPT FORMULAIRE
   $('label').click(function(){
     $(this).toggleClass('labelselected');
   });
   $('.champstxt').click(function(){
     $('#msg').toggleClass('msgselected')
   });

});

//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
