describe('CageDancer', function() {

  var cageDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cageDancer = new NicCageDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(cageDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a different step function', function() {
    var makeDancer = new MakeDancer(10, 20, timeBetweenSteps);
    expect(cageDancer.step).to.be.a('function');
    expect(cageDancer.step).to.not.eql(makeDancer.step);
  });

  it('should have a lineUp function', function() {
    expect(cageDancer.lineUp).to.be.a('function');
  });

  // it('should update the size when a user mouses over the paths', function () {
  //   var oldSize = cageDancer.$node.position();
  //   // debugger;
  //   // document.body.('path_one').dispatchEvent(new MouseEvent('mouseover'));
  //   var cageElement = document.body.getElementsByClassName('cage');
  //   console.log(cageElement);
  //   console.log(document.body);
  //   cageElement.dispatchEvent(new MouseEvent('mouseover'));
  //   expect(cageElement.position()).to.not.equal(oldSize);
  // });
});
