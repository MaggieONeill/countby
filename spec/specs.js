
describe('countBy', function() {

  it("if we put in an end point and a increment number we get back the answer", function() {
    expect(countBy(1,1)).to.eql([1]);
  });

  it("will stop at endNumber", function() {
    var testArray = [];
    testArray = countBy(5,25);
    var lastEntry = testArray[testArray.length-1];
    expect(lastEntry).to.eql(25);
  });
  
  it("starts at countBy number", function() {
    var testArray = [];
    testArray = countBy(5,25);
    expect(testArray[0]).to.eql(5);
  });

  it("will increment by countByNumber", function(){
    var testArray = [];
    testArray = countBy(5,25);
    expect(testArray[1] - testArray[0]).to.eql(5);
  });

  it("will output the countArray", function() {
    expect(countBy(5,25)).to.eql([5, 10, 15, 20, 25]);
  })
});
