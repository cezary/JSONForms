describe('form with types', function() {
  var formEl = document.querySelector('form.types');
  var formJSON = JSONForms.encode(formEl);

  it('should not be empty', function() {
    formJSON.should.not.be.empty;
  });

  it('should have property set', function() {
    formJSON.should.have.property('description');
    formJSON.should.have.property('choice');
  });

  it('should correctly parse the types of inputs', function() {
    formJSON['description'].should.be.a('string');
    formJSON['choice'].should.be.a('string');
  });
});

