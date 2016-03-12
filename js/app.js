$(function() {

  window.App = {

    init: function() {
      this.hello();
      this.whoami();
    },

    hello: function() {
      var hello = [
        'Hello,', 'Greetings,', 'Halo,',
        'Hi,', 'Hai,', 'Bonjour,', 'Aloha,',
        'Salve,', 'Hola,', 'Namaste,', 'Assalamualaikum,',
        'Ohayo,'
      ];

      $('.hello').text(hello[getRandomInt(0, hello.length)]);
    },

    whoami: function() {
      $(".whoami").typed({
        strings: [
          "I'm Laravel developer",
          "I ♥ Vim",
          "I'm iOS developer",
          "I ♥ Bootstrap",
          "I'm NodeJS developer",
          "I ♥ VueJS",
          "I ♥ your money!"
        ],
        typeSpeed: 50,
        startDelay: 100,
        backSpeed: 20,
        backDelay: 2000,
        loop: false
      });
    }
  };

  App.init();

});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 500, 'easeInOutExpo');
    event.preventDefault();
  });
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
