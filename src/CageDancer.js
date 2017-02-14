var NicCageDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.prepend('<img class="cageImg" src="src/cageSource.png" />');
  // this.$node = $('span > img.cage');
  this.$node.addClass('cage');
  this.$node.removeClass('dancer');
};

NicCageDancer.prototype = Object.create(MakeDancer.prototype);
NicCageDancer.prototype.constructor = NicCageDancer;

NicCageDancer.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  //this.$node.toggle();
  
  this.$node
    .mouseover(function() {
      $(this).children().addClass('BIGCAGE');
    })
    .mouseout(function() {
      $(this).children().removeClass('BIGCAGE');
    });
  //on hover, get bigger
};