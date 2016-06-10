'use strict';

var resources = require('../../lib/fusebill').resources;
var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

var APPFEE_TEST_ID = 'appFeeIdTest999';
var REFUND_TEST_ID = 'refundIdTest999';

// Create new CustomerCard instance with pre-filled customerId:
var appFeeRefund = new resources.ApplicationFeeRefunds(
    fusebill,
    {feeId: APPFEE_TEST_ID}
);

// Use spy from existing resource:
appFeeRefund._request = fusebill.customers._request;

describe('ApplicationFeeRefund Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      appFeeRefund.retrieve(REFUND_TEST_ID);
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/application_fees/' + APPFEE_TEST_ID + '/refunds/' + REFUND_TEST_ID,
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      appFeeRefund.update(REFUND_TEST_ID, {
        metadata: {key: 'value'},
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/application_fees/' + APPFEE_TEST_ID + '/refunds/' + REFUND_TEST_ID,
        data: {metadata: {key: 'value'}},
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      appFeeRefund.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/application_fees/' + APPFEE_TEST_ID + '/refunds',
        data: {},
        headers: {},
      });
    });
  });
});
