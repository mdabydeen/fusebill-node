'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('ApplicationFee Resource', function() {
  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.applicationFees.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/application_fees',
        data: {},
        headers: {},
      });
    });
  });

  describe('refund', function() {
    it('Sends the correct request', function() {
      fusebill.applicationFees.refund('applicationFeeIdExample3242', {amount: 23});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/application_fees/applicationFeeIdExample3242/refund',
        data: {amount: 23},
        headers: {},
      });
    });
  });

  describe('refunds', function() {
    it('Sends the correct update request', function() {
      fusebill.applicationFees.updateRefund(
        'appFeeIdExample3242',
        'refundIdExample2312',
        {metadata: {key: 'value'}}
      );
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/application_fees/appFeeIdExample3242/refunds/refundIdExample2312',
        data: {metadata: {key: 'value'}},
        headers: {},
      });
    });

    it('Sends the correct create request', function() {
      fusebill.applicationFees.createRefund(
        'appFeeIdExample3242',
        {amount: 100}
      );
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/application_fees/appFeeIdExample3242/refunds',
        data: {amount: 100},
        headers: {},
      });
    });

    it('Sends the correct list request', function() {
      fusebill.applicationFees.listRefunds(
        'appFeeIdExample3242'
      );
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/application_fees/appFeeIdExample3242/refunds',
        data: {},
        headers: {},
      });
    });

    it('Sends the correct retrieve request', function() {
      fusebill.applicationFees.retrieveRefund(
        'appFeeIdExample3242',
        'refundIdExample2312'
      );
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/application_fees/appFeeIdExample3242/refunds/refundIdExample2312',
        data: {},
        headers: {},
      });
    });
  });
});
