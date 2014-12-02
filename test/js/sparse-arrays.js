describe('form with sparse arrays', function() {
  var formJSON = $('form.sparse-arrays').JSONencode();

  it('should not be empty', function() {
    formJSON.should.not.be.empty;
  });

  it('should have property set', function() {
    formJSON.should.have.property('heartbeat');
  });

  it('should create an array', function() {
    formJSON['heartbeat'].should.be.a('array');
    formJSON['heartbeat'].length.should.equal(3);
  });

  it('should correctly parse the types of inputs', function() {
    formJSON['heartbeat'][0].should.be.a('string');
    formJSON['heartbeat'][2].should.be.a('string');
  });
});
