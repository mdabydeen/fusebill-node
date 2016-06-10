'use strict';

var resources = require('../../lib/fusebill').resources;
var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

var CUSTOMER_TEST_ID = 'customerIdTest999';

// Create new CustomerCard instance with pre-filled customerId:
var customerCard = new resources.CustomerCards(
  fusebill,
  {customerId: CUSTOMER_TEST_ID}
);

// Use spy from existing resource:
customerCard._request = fusebill.customers._request;

describe('CustomerCard Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      customerCard.retrieve('cardIdFoo456');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      customerCard.create({
        number: '123456', exp_month: '12',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards',
        headers: {},
        data: {number: '123456', exp_month: '12'},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      customerCard.update('cardIdFoo456', {
        name: 'Bob M. Baz',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        headers: {},
        data: {name: 'Bob M. Baz'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      customerCard.del('cardIdFoo456');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      customerCard.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards',
        headers: {},
        data: {},
      });
    });
  });
});
