var DoggoDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.prepend('<img src="src/dogge.png" />');
  // this.$node = $('span > img.cage');
  this.$node.addClass('doggo');
  this.$node.removeClass('dancer');
};

DoggoDancer.prototype = Object.create(MakeDancer.prototype);
DoggoDancer.prototype.constructor = DoggoDancer;

DoggoDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this, 50);
  this.$node.toggleClass('change');
};