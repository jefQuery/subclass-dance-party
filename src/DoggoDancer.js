var DoggoDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.prepend('<img src="src/dogge.png" />');
  // this.$node = $('span > img.cage');
  this.$node.addClass('doggo');
  this.$node.removeClass('dancer');
};

DoggoDancer.prototype = Object.create(MakeDancer.prototype);
DoggoDancer.prototype.constructor = DoggoDancer;

DoggoDancer.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggleClass('change');
};