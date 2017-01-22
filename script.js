window.onload = function() {
  document.getElementById('container').style.opacity = 1;

  var links = document.getElementsByTagName('a');
  Array.prototype.forEach.call(links, function(t, i) {
    setTimeout(function() {
      t.style.opacity = 1;
    }, Math.log((i*i+4))*220);
  });
};
