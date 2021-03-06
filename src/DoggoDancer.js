var DoggoDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.prepend('<img class="doggoImg" src="src/dogge.png" />');
  this.$node.addClass('doggo');
  this.$node.removeClass('dancer');
};

DoggoDancer.prototype = Object.create(MakeDancer.prototype);
DoggoDancer.prototype.constructor = DoggoDancer;

DoggoDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this, 350);
  this.$node.toggleClass('change');
};

DoggoDancer.prototype.lineUp = function(left) {
  this.setPosition('45.3%', left);
};