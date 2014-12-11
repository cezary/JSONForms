describe('form with deep and array structure', function() {
  var formEl = document.querySelector('form.even-deeper-structure');
  var formJSON = JSONForms.encode(formEl);

  it('should not be empty', function() {
    formJSON.should.not.be.empty;
  });

  it('should have property set', function() {
    formJSON.should.have.property('pet');
  });

  it('should create an array', function() {
    formJSON['pet'].should.be.a('array');
    formJSON['pet'].length.should.equal(2);
  });

  it('should correctly parse the types of inputs', function() {
    formJSON['pet'].forEach(function(pet) {
      pet['species'].should.be.a('string');
      pet['name'].should.be.a('string');
    });
  });
});
