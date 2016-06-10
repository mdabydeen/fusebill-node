'use strict';

require('./testUtils');

var Error = require('../lib/Error');
var expect = require('chai').expect;

describe('Error', function() {
  it('Populates with type and message params', function() {
    var e = new Error('FooError', 'Foo happened');
    expect(e).to.have.property('type', 'FooError');
    expect(e).to.have.property('message', 'Foo happened');
    expect(e).to.have.property('stack');
  });

  describe('FusebillError', function() {
    it('Generates specific instance depending on error-type', function() {
      expect(Error.FusebillError.generate({type: 'card_error'})).to.be.instanceOf(Error.FusebillCardError);
      expect(Error.FusebillError.generate({type: 'invalid_request_error'})).to.be.instanceOf(
        Error.FusebillInvalidRequestError
      );
      expect(Error.FusebillError.generate({type: 'api_error'})).to.be.instanceOf(Error.FusebillAPIError);
    });

    it('Pulls in request IDs', function() {
      var e = Error.FusebillError.generate({type: 'card_error', requestId: 'foo'});
      expect(e).to.have.property('requestId', 'foo');
    });

    it('Pulls in HTTP status code', function() {
      var e = Error.FusebillError.generate({type: 'card_error', statusCode: 400});
      expect(e).to.have.property('statusCode', 400);
    });
  });
});
