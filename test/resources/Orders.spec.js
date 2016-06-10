'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('Order Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      fusebill.orders.retrieve('orderIdFoo123');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/orders/orderIdFoo123',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      fusebill.orders.create({
        currency: 'usd',
        items: [
          {
            type: 'sku',
            parent: 'skuIdFoo123',
          },
        ],
        shipping: {
          name: 'Jane Rosen',
          address: {
            line1: 'foo',
          },
        },
        email: 'jane@ros.en',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/orders',
        data: {
          currency: 'usd',
          items: [
            {
              type: 'sku',
              parent: 'skuIdFoo123',
            },
          ],
          shipping: {
            name: 'Jane Rosen',
            address: {
              line1: 'foo',
            },
          },
          email: 'jane@ros.en',
        },
        headers: {},
      });
    });
  })

  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.orders.list({
        limit: 3,
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/orders',
        data: {
          limit: 3,
        },
        headers: {},
      });
    });

    it('Supports filtering by status', function() {
      fusebill.orders.list({
        status: 'active',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/orders',
        data: {
          status: 'active',
        },
        headers: {},
      });
    });
  });

  describe('pay', function() {
    it('Sends the correct request', function() {
      fusebill.orders.pay('orderIdFoo3242', {
        source: 'tok_FooBar',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/orders/orderIdFoo3242/pay',
        headers: {},
        data: {source: 'tok_FooBar'},
      });
    });
  });

  describe('returnOrder', function() {
    it('Sends the correct request', function() {
      fusebill.orders.returnOrder('orderIdFoo3242', {
        items: [
          {parent: 'sku_123'},
        ],
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/orders/orderIdFoo3242/returns',
        headers: {},
        data: {items: [{parent: 'sku_123'}]},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      fusebill.orders.update('orderIdFoo3242', {status: 'fulfilled'});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/orders/orderIdFoo3242',
        headers: {},
        data: {status: 'fulfilled'},
      });
    });
  });
});
