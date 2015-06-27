describe('countUpBy', function(){

  it("will count up by ones to a given number", function(){
    expect(countUpBy(1, 5)).to.eql([1, 2, 3, 4, 5])
  });

  it("will count up to a bigger number by multiples of a smaller number", function(){
    expect(countUpBy(5, 25)).to.eql([5, 10, 15, 20, 25])
  });

  it("will result in null if the smaller number equals zero", function(){
    expect(countUpBy(0, 25)).to.eql(null)
  });



});
