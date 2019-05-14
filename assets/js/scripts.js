let flag = 0;
console.log(flag);

// STATIC NAVIGATION BAR
let counter = 0;
$(".hamburger").click(() => {
  if (counter == 0) {
    $(".nav-items-mobile").css("animation", "fadeDown .2s both");
    counter++;
  } else {
    $(".nav-items-mobile").css("animation", "fadeDownDown .2s both");
    counter--;
  }
});

// Jumbotron Carousel
$(".carousel1").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: false,
  nextArrow: false,
  dots: true
});

$(document).ready(function() {
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 500) {
      showScrollNav();
    } else {
      hideScrollNav();
    }
  });
});

function showScrollNav() {
  $(".scroll-nav").css({
    transform: "translateY(0px)",
    opacity: "1",
    padding: "10px 0"
  });
}
function hideScrollNav() {
  $(".scroll-nav").css({
    transform: "translateY(-100px)",
    opacity: "0",
    padding: "0px"
  });
}
