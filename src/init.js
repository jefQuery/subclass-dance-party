$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function() {
    var dancerSpacing = $(window).width() / window.dancers.length;
    for (var i = 0; i < window.dancers.length; i++) {
      
      window.dancers[i].lineUp((dancerSpacing * i) + 'px'); //pass in index of left, and hard-coded top
      
    }
  }); 
  $('.interactButton').on('click', function() {
    for (var i = 0; i < window.dancers.length - 1; i++) {
      // for each dancer find closest neighbor
      var minDistance = Infinity;
      var minPosition;

      var currentDancer = window.dancers[i].$node.position();
      for (var j = i + 1; j < window.dancers.length; j++) {
        var newDancer = window.dancers[j].$node.position();
        var distance = Math.sqrt(Math.pow((newDancer.top - currentDancer.top), 2) + Math.pow((newDancer.left - currentDancer.left), 2));

        if (distance < minDistance) {
          minDistance = distance;
          minPosition = j;
        }
      }
      window.dancers[i].dosido(window.dancers[minPosition]);
      
    }
  });
});

