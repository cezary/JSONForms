describe('form with invalid keys', function() {
  var formJSON = $('form.invalid').JSONencode();

  it('should not be empty', function() {
    formJSON.should.not.be.empty;
  });

  it('should have property set', function() {
    formJSON.should.have.property('error');
    formJSON.should.have.property('error[bad');
  });

  it('should create an object', function() {
    formJSON['error'].should.be.a('object');
  });

  it('should correctly parse the types of inputs', function() {
    formJSON['error']['good'].should.be.a('string');
    formJSON['error[bad'].should.be.a('string');
  });
});
