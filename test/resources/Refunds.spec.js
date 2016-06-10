'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('Refund Resource', function() {
  describe('create', function() {
    it('Sends the correct request', function() {
      fusebill.refunds.create({
        amount: '300',
        charge: 'ch_123',
      })

      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/refunds',
        headers: {},
        data: {
          amount: '300',
          charge: 'ch_123',
        },
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      fusebill.refunds.retrieve('re_123');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/refunds/re_123',
        data: {},
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.refunds.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/refunds',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      fusebill.refunds.update('re_123', {metadata: {key: 'abcd'}});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/refunds/re_123',
        headers: {},
        data: {metadata: {key: 'abcd'}},
      });
    });
  });
});
