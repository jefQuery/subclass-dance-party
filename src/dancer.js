// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step(timeBetweenSteps);
  this.setPosition(top, left);

  this.top = top;
  this.left = left;
};

MakeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.top = top;
  this.left = left;
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function(left) {
  this.setPosition('50%', left);
};

MakeDancer.prototype.dosido = function(target) {
  var current = this;
  
  this.setPosition(target.top, target.left);
  target.setPosition(current.top, current.left);

};