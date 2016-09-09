/* <---- Function that change the opacity on scroll ----> */

var fadeStart=20 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
    ,mobileFade = $('.mobileBackground')
    ,fading = $('.headerBackground');

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity).html(opacity);
    mobileFade.css('opacity',opacity).html(opacity);
});
/* <---- END Change opacity on scroll ----> */

/* <---- Function for custom hamburger icon ----> */
$(function(){
var obj = document.querySelectorAll('.mobileIcon');
for(var i = obj.length -1;i>=0;i--){
var toggle = obj[i];
toggleactive(toggle);
}

function toggleactive(toggle) {
toggle.addEventListener("click",function() {

if(this.classList.contains("active") === true) {
  this.classList.remove("active");
}
else {
  this.classList.add("active");
}
});
}
});
/* <---- END custom hamburger icon ----> */


/* <---- Mobile nav slide animation ----> */
$(document).ready(function() {
        $('.mobileIcon').click(function() {
                $('.mobileMenu').toggle("slide");
        });
    });
/* <---- END Mobile nav slide animation ----> */


/* --- function for showing individual content page. --- */
var previousPageClass = "landing";
var switchPage = function(pageClass) {
  $("body").removeClass(previousPageClass + "-page").addClass(pageClass + "-page");
  previousPageClass = pageClass;

    $('.page').removeClass("page-active");

    $('.' + pageClass).addClass("page-active");
};

$('.portfolioLink').click(function(){
  switchPage("portfolio");
});

$('.cvLink').click(function(){
  switchPage("cv");
});
$('.aboutLink').click(function(){
  switchPage("about");
});
$('.contactLink').click(function(){
  switchPage("contact");
});
$('.homeLink').click(function(){
  switchPage("landing");
});
/* --- END function for showing individual content page. --- */


/* ---  function for loading contact.php file --- */
$(document).ready(function(){
  $(".contactLink").click(function(){
    $(".contact").load('php/contact.php');
  });
});
/* ---  END function for loading contact.php file --- */


/* --- functions for automatic scroll on nav click --- */
$(".aboutLink").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});

$(".portfolioLink").click(function() {
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top},
        'slow');

});

$(".portfolioLink").click(function(){
    $('.mobileBackground').animate({
      opacity: 0, });
});

$(".cvLink").click(function() {
    $('html,body').animate({
        scrollTop: $(".cv").offset().top},
        'slow');
});

$(".contactLink").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
});
/* -- END function for scroll on nav click --- */

/* <---- Image Animations ----> */
$('.aboutLink').click(function(){
  $(".skills").animate({
    opacity: 1,
  }, 2000 );
});

$('.portfolioLink').click(function(){
  $("#imgOne").animate({
    opacity: 1,
  }, 2000 );
});

$('.portfolioLink').click(function(){
  $("#imgTwo").animate({
    opacity: 1,
  }, 2000 );
});

$('.portfolioLink').click(function(){
  $("#imgThree").animate({
    opacity: 1,
  }, 2000 );
});
