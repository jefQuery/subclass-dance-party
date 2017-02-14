describe('DoggoDancer', function() {

  var doggoDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    doggoDancer = new DoggoDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(doggoDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(doggoDancer.$node, 'toggle');
    doggoDancer.step(timeBetweenSteps);
    expect(doggoDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(doggoDancer, 'step');
      expect(doggoDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(doggoDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(doggoDancer.step.callCount).to.be.equal(2);
    });
  });
});
