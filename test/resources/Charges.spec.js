'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('Charge Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      fusebill.charges.retrieve('chargeIdFoo123');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/chargeIdFoo123',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      fusebill.charges.create({
        amount: '1500',
        currency: 'usd',
        shipping: {
          address: {
            line1: 'foo',
          },
        },
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges',
        data: {
          amount: '1500',
          currency: 'usd',
          shipping: {
            address: {
              line1: 'foo',
            },
          },
        },
        headers: {},
      });
    });

    it('Sends the correct request for Bitcoin', function() {
      var receiver = fusebill.bitcoinReceivers.create({
        amount: 100,
        currency: 'usd',
        description: 'some details',
        email: 'do+fill_now@fusebill.com',
      })

      var charge = fusebill.charges.create({
        amount: receiver.amount,
        currency: receiver.currency,
        description: receiver.description,
        source: receiver.id,
      });

      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges',
        headers: {},
        data: {
          amount: receiver.amount,
          currency: receiver.currency,
          description: receiver.description,
          source: receiver.id,
        },
      })
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.charges.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges',
        data: {},
        headers: {},
      });
    });
  });

  describe('capture', function() {
    it('Sends the correct request', function() {
      fusebill.charges.capture('chargeIdExample3242', {amount: 23});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/capture',
        headers: {},
        data: {amount: 23},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      fusebill.charges.update('chargeIdExample3242', {description: 'foo321'});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242',
        headers: {},
        data: {description: 'foo321'},
      });
    });
  });

  describe('refund', function() {
    it('Sends the correct request', function() {
      fusebill.charges.refund('chargeIdExample3242', {amount: 23});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/refund',
        headers: {},
        data: {amount: 23},
      });
    });

    it('Incorrect arguments result in an error', function() {
      expect(
        fusebill.charges.refund('chargeIdExample123', 39392)
      ).to.be.eventually.rejectedWith(/unknown arguments/i);
    });
  });

  describe('refunds', function() {
    it('Sends the correct update request', function() {
      fusebill.charges.updateRefund(
        'chargeIdExample3242',
        'refundIdExample2312',
        {metadata: {key: 'value'}}
      );
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/refunds/refundIdExample2312',
        headers: {},
        data: {metadata: {key: 'value'}},
      });
    });

    it('Sends the correct create request', function() {
      fusebill.charges.createRefund(
        'chargeIdExample3242',
        {amount: 100}
      );
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/refunds',
        headers: {},
        data: {amount: 100},
      });
    });

    it('Sends the correct list request', function() {
      fusebill.charges.listRefunds(
        'chargeIdExample3242'
      );
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/chargeIdExample3242/refunds',
        headers: {},
        data: {},
      });
    });

    it('Sends the correct retrieve request', function() {
      fusebill.charges.retrieveRefund(
        'chargeIdExample3242',
        'refundIdExample2312'
      );
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/chargeIdExample3242/refunds/refundIdExample2312',
        headers: {},
        data: {},
      });
    });
  });

  describe('updateDispute', function() {
    it('Sends the correct request', function() {
      fusebill.charges.updateDispute('chargeIdExample3242', {evidence: 'foo'});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/dispute',
        headers: {},
        data: {evidence: 'foo'},
      });
    });
  });

  describe('closeDispute', function() {
    it('Sends the correct request', function() {
      fusebill.charges.closeDispute('chargeIdExample3242', {});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/dispute/close',
        headers: {},
        data: {},
      });
    });
  });

  describe('markAsFraudulent', function() {
    it('Sends the correct request', function() {
      fusebill.charges.markAsFraudulent('chargeIdExample3242');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242',
        data: {'fraud_details': {'user_report': 'fraudulent'}},
        headers: {},
      });
    });
  });

  describe('markAsSafe', function() {
    it('Sends the correct request', function() {
      fusebill.charges.markAsSafe('chargeIdExample3242');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242',
        data: {'fraud_details': {'user_report': 'safe'}},
        headers: {},
      });
    });
  });
});
