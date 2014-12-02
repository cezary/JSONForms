describe('form with deeper structure', function() {
  var formJSON = $('form.deeper-structure').JSONencode();

  it('should not be empty', function() {
    formJSON.should.not.be.empty;
  });

  it('should have property set', function() {
    formJSON.should.have.property('pet');
    formJSON.should.have.property('kids');
  });

  it('should create an object', function() {
    formJSON['pet'].should.be.a('object');
    Object.keys(formJSON['pet']).length.should.equal(2);
  });

  it('should create an array', function() {
    formJSON['kids'].should.be.a('array');
    formJSON['kids'].length.should.equal(2);
  });

  it('should correctly parse the types of inputs', function() {
    formJSON['pet']['species'].should.be.a('string');
    formJSON['pet']['name'].should.be.a('string');
    formJSON['kids'].forEach(function(value) {
      value.should.be.a('string');
    });
  });
});
