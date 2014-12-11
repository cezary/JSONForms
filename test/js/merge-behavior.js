describe('form with merge behavior', function() {
  var formEl = document.querySelector('form.merge-behavior');
  var formJSON = JSONForms.encode(formEl);

  it('should not be empty', function() {
    formJSON.should.not.be.empty;
  });

  it('should have property set', function() {
    formJSON.should.have.property('mix');
  });

  it('should create an object', function() {
    formJSON['mix'].should.be.a('object');
    Object.keys(formJSON['mix']).length.should.equal(5);
  });

  it('should correctly parse the types of inputs', function() {
    for (var value in formJSON['mix']) {
      value.should.be.a('string');
    }
  });

  it('should have the right values', function() {
    formJSON['mix'][''].should.be.eql('scalar');
    formJSON['mix']['0'].should.be.eql('array 1');
    formJSON['mix']['2'].should.be.eql('array 2');
    formJSON['mix']['key'].should.be.eql('key key');
    formJSON['mix']['car'].should.be.eql('car key');
  });
});
