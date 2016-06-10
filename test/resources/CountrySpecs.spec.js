'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('CountrySpecs Resource', function() {
  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.countrySpecs.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/country_specs',
        data: {},
        headers: {},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      var country = 'US';
      fusebill.countrySpecs.retrieve(country);
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/country_specs/' + country,
        data: {},
        headers: {},
      });
    });
  });
});
