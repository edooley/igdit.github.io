/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutQuart');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function() {
    var sayings = ['A Reality', 'A Success', 'Sleek', 'A Custom App', 'A Product', 'Responsive', 'Reliable', 'A Masterpiece', 'Cutting Edge'];
    var atSaying = 0;
    var $saying = $('#header-sayings');
    function advanceSaying() {
      
      $saying.animate({
      opacity: 0, 'margin-top': "50px"
    },300, 'easeInQuart', function() {
      $(this).text(sayings[atSaying]);
      atSaying++;
      if(atSaying >= sayings.length) { atSaying = 0; }
      
      $(this).css('margin-top', '-50px');
      $(this).animate({opacity: 1, 'margin-top': "0"}, 300, 'easeOutQuart');
    });
    }
    advanceSaying();
    setInterval(advanceSaying, 2700);
});