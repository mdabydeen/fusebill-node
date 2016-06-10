'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('Events Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      fusebill.events.retrieve('eventIdBaz');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/events/eventIdBaz',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.events.list({count: 25});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/events',
        headers: {},
        data: {count: 25},
      });
    });
  });
});
