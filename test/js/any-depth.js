describe('form with any depth structure', function() {
  var formEl = document.querySelector('form.any-depth');
  var formJSON = JSONForms.encode(formEl);

  it('should not be empty', function() {
    formJSON.should.not.be.empty;
  });

  it('should have property set', function() {
    formJSON.should.have.property('wow');
  });

  it('should create an array', function() {
    formJSON['wow']['such']['deep'].should.be.a('array');
    formJSON['wow']['such']['deep'].length.should.equal(4);
  });

  it('should correctly parse the types of inputs', function() {
    formJSON['wow']['such']['deep'][3]['much']['power']['!'].should.be.a('string');
    formJSON['wow']['such']['deep'][3]['much']['power']['!'].should.be.eql('Amaze');
  });
});
