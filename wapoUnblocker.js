var target = document.querySelector("body");

var overlay = document.querySelector(".simple-overlay");

var iterations = 0;
var interval = setInterval(function(){
  var overlay = document.querySelector(".simple-overlay");
  var signin = document.querySelector(".wp_signin");
  var body = document.querySelector("body");

  if(overlay){
    // Get rid of the overlay
    overlay.parentNode.removeChild(overlay);
    signin.parentNode.removeChild(signin);

    // Get the scrollbar back on the window
    body.style.overflow = 'auto';

    // This overrides the event listeners that the website uses to block the scroll wheel
    window.addEventListener('scroll', function(event) {
      event.stopImmediatePropagation();
    }, true);
    window.addEventListener('wheel', function(event) {
      event.stopImmediatePropagation();
    }, true);
    window.addEventListener('mousewheel', function(event) {
      event.stopImmediatePropagation();
    }, true);

    // Interestingly, wapo captures keypresses. This could be used to block 
    // keypresses like F5, or to capture what people are typing, say for analytics.
    // Remove the block on F5 for refresh.
    window.addEventListener('keydown', function(event) {
      event.stopImmediatePropagation();
    }, true);

    // Don't need this interval anymore
    clearInterval(interval);
  }
  // Stop after 5 seconds
  if(iterations === 10){
    clearInterval(interval);
  }
  iterations++;
}, 500);
