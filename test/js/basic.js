describe('form with basic keys', function() {
  var formEl = document.querySelector('form.basic');
  var formJSON = JSONForms.encode(formEl);

  it('should not be empty', function() {
    formJSON.should.not.be.empty;
  });

  it('should have properties set', function() {
    formJSON.should.have.property('name');
    formJSON.should.have.property('hind');
    formJSON.should.have.property('shiny');
  });

  it('should correctly parse the types of inputs', function() {
    formJSON['name'].should.be.a('string');
    formJSON['hind'].should.be.a('string');
    formJSON['shiny'].should.be.a('boolean');
  });
});
