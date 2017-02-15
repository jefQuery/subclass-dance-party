var NicCageDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.prepend('<img class="cageImg" src="src/cageSource.png" />');
  this.$node.addClass('cage');
  this.$node.removeClass('dancer');
};

NicCageDancer.prototype = Object.create(MakeDancer.prototype);
NicCageDancer.prototype.constructor = NicCageDancer;

NicCageDancer.prototype.step = function(timeBetweenSteps) {
  
  this.$node
    .mouseover(function() {
      $(this).children().animate({
        height: '750px',
        width: '750px'
      });
    })
    .mouseout(function() {
      $(this).children().animate({
        height: '100px',
        width: '100px'
      });
    });
};


NicCageDancer.prototype.lineUp = function(left) {
  this.setPosition('45%', left);
};