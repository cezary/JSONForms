describe('form with append notation', function() {
  var formEl = document.querySelector('form.append');
  var formJSON = JSONForms.encode(formEl);

  it('should not be empty', function() {
    formJSON.should.not.be.empty;
  });

  it('should have property set', function() {
    formJSON.should.have.property('highlander');
  });

  it('should create an array', function() {
    formJSON['highlander'].should.be.a('array');
    formJSON['highlander'].length.should.equal(1);
  });

  it('should correctly parse the types of inputs', function() {
    formJSON['highlander'][0].should.be.a('string');
  });

  it('should have the right values', function() {
    formJSON['highlander'][0].should.be.eql('one');
  });
});
