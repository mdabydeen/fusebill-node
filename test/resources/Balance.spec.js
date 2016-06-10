'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('Balance Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      fusebill.balance.retrieve();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance',
        data: {},
        headers: {},
      });
    });

    it('Sends the correct request [with specified auth]', function() {
      fusebill.balance.retrieve('aGN0bIwXnHdw5645VABjPdSn8nWY7G11');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance',
        data: {},
        auth: 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11',
        headers: {},
      });
    });
  });

  describe('listTransactions', function() {
    it('Sends the correct request', function() {
      fusebill.balance.listTransactions();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance/history',
        data: {},
        headers: {},
      });
    });

    it('Sends the correct request [with specified auth]', function() {
      fusebill.balance.listTransactions('aGN0bIwXnHdw5645VABjPdSn8nWY7G11');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance/history',
        data: {},
        headers: {},
        auth: 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11',
      });
    });
  });

  describe('retrieveTransaction', function() {
    it('Sends the correct request', function() {
      fusebill.balance.retrieveTransaction('transactionIdFoo');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance/history/transactionIdFoo',
        data: {},
        headers: {},
      });
    });

    it('Sends the correct request [with specified auth]', function() {
      fusebill.balance.retrieveTransaction('transactionIdFoo', 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance/history/transactionIdFoo',
        data: {},
        headers: {},
        auth: 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11',
      });
    });
  });
});
