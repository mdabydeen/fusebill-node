'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('OrderReturn Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      fusebill.orderReturns.retrieve('orderReturnIdFoo123');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/order_returns/orderReturnIdFoo123',
        data: {},
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.orderReturns.list({
        limit: 3,
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/order_returns',
        data: {
          limit: 3,
        },
        headers: {},
      });
    });

    it('Supports filtering by order', function() {
      fusebill.orderReturns.list({
        order: 'orderIdFoo123',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/order_returns',
        data: {
          order: 'orderIdFoo123',
        },
        headers: {},
      });
    });
  });
});
