'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('Transfers Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      fusebill.transfers.retrieve('transferId1');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers/transferId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      fusebill.transfers.create({
        amount: 200, currency: 'usd', recipient: {},
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers',
        headers: {},
        data: {amount: 200, currency: 'usd', recipient: {}},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      fusebill.transfers.update('transferId6654', {
        amount: 300,
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers/transferId6654',
        headers: {},
        data: {amount: 300},
      });
    });
  });

  describe('cancel', function() {
    it('Sends the correct request', function() {
      fusebill.transfers.cancel('transferId4');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers/transferId4/cancel',
        headers: {},
        data: {},
      });
    });
  });

  describe('reverse', function() {
    it('Sends the correct request', function() {
      fusebill.transfers.reverse('transferId4');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers/transferId4/reversals',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.transfers.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers',
        headers: {},
        data: {},
      });
    });
  });

  describe('listTransactions', function() {
    it('Sends the correct request', function() {
      fusebill.transfers.listTransactions('tr_14222');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers/tr_14222/transactions',
        headers: {},
        data: {},
      });
    });
  });
});
