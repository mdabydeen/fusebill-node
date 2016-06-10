'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('BitcoinReceivers Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      fusebill.bitcoinReceivers.retrieve('receiverId1');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/bitcoin/receivers/receiverId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      fusebill.bitcoinReceivers.create({
        amount: 200,
        currency: 'usd',
        description: 'some details',
        email: 'do+fill_now@fusebill.com',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/bitcoin/receivers',
        headers: {},
        data: {
          amount: 200,
          currency: 'usd',
          description: 'some details',
          email: 'do+fill_now@fusebill.com',
        },
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.bitcoinReceivers.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/bitcoin/receivers',
        headers: {},
        data: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request to the top-level API', function() {
      fusebill.bitcoinReceivers.update(
        'btcrcv_123',
        {metadata: {key: 'value'}}
      );
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/bitcoin/receivers/btcrcv_123',
        data: {metadata: {key: 'value'}},
        headers: {},
      });
    });
  });

  describe('listTransactions', function() {
    it('Sends the correct request', function() {
      fusebill.bitcoinReceivers.listTransactions('receiverId', {
        limit: 1,
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/bitcoin/receivers/receiverId/transactions',
        headers: {},
        data: {
          limit: 1,
        },
      })
    });
  });
});
