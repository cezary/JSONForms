describe('form with multiple values', function() {
  var formEl = document.querySelector('form.multiple-values');
  var formJSON = JSONForms.encode(formEl);

  it('should not be empty', function() {
    formJSON.should.not.be.empty;
  });

  it('should have property set', function() {
    formJSON.should.have.property('bottle-on-wall');
  });

  it('should create an array', function() {
    formJSON['bottle-on-wall'].should.be.a('array');
    formJSON['bottle-on-wall'].length.should.equal(3);
  });

  it('should correctly parse the types of inputs', function() {
    formJSON['bottle-on-wall'].forEach(function(value) {
      value.should.be.a('number');
    });
  });
});
