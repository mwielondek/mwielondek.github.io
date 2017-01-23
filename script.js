window.onload = function() {
  // loading animation
  document.getElementById('container').style.opacity = 1;

  var links = document.getElementsByTagName('a');
  Array.prototype.forEach.call(links, function(t, i) {
    setTimeout(function() {
      t.style.opacity = 1;
    }, Math.log((i*i+4))*220);
  });


  // wow. very easter egg. such lols.
  var dropWisdom = function() {
    var mottos = easterDiv.getElementsByTagName('li');
    Array.prototype.forEach.call(mottos, function(t, i) {
      var stepDelay = 1000, stayOnScreen = 5000;
      setTimeout(function() {
        t.style.opacity = 1;
      }, i*stepDelay);
      setTimeout(function() {
        t.style.opacity = 0;
      }, i*stepDelay+stayOnScreen);
    });
  };

  var listener = function() {
    var counter = 0;
    var timelimit = 1000;
    var tapsreq = 5;
    return function() {
      if (counter == 0) setTimeout(function() { counter = 0; }, timelimit);
      counter += 1;
      if (counter == tapsreq) {
        dropWisdom();
      }
    };
  }();

  var easterDiv = document.getElementById('easterEgg');
  easterDiv.addEventListener('click', listener);
};
