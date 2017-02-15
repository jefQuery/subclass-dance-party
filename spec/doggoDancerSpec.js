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

  it('should have a different step function', function() {
    var makeDancer = new MakeDancer(10, 20, timeBetweenSteps);
    expect(doggoDancer.step).to.be.a('function');
    expect(doggoDancer.step).to.not.eql(makeDancer.step);
  });

  it('should have a lineUp function', function() {
    expect(doggoDancer.lineUp).to.be.a('function');
  });
});
