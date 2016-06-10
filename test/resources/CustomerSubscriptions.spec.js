'use strict';

var resources = require('../../lib/fusebill').resources;
var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

var CUSTOMER_TEST_ID = 'customerIdTest999';

// Create new CustomerSubscription instance with pre-filled customerId:
var customerSubscription = new resources.CustomerSubscriptions(
    fusebill,
    {customerId: CUSTOMER_TEST_ID}
);

// Use spy from existing resource:
customerSubscription._request = fusebill.customers._request;

describe('CustomerSubscription Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      customerSubscription.retrieve('subscriptionIdFoo456');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/subscriptions/subscriptionIdFoo456',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      customerSubscription.create({
        plan: 'gold', quantity: '12',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/subscriptions',
        headers: {},
        data: {plan: 'gold', quantity: '12'},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      customerSubscription.update('subscriptionIdFoo456', {
        name: 'Bob M. Baz',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/subscriptions/subscriptionIdFoo456',
        headers: {},
        data: {name: 'Bob M. Baz'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      customerSubscription.del('subscriptionIdFoo456');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/subscriptions/subscriptionIdFoo456',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      customerSubscription.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/subscriptions',
        headers: {},
        data: {},
      });
    });
  });

  describe('Discount methods', function() {
    describe('deleteDiscount', function() {
      it('Sends the correct request', function() {
        customerSubscription.deleteDiscount('customerIdFoo321', 'subscriptionIdBar654');
        expect(fusebill.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdBar654/discount',
          headers: {},
          data: {},
        });
      });
    });
  });
});
