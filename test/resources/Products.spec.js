'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('Product Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      fusebill.products.retrieve('productIdFoo123');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/products/productIdFoo123',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      fusebill.products.create({
        name: 'Llamas',
        active: true,
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/products',
        data: {
          name: 'Llamas',
          active: true,
        },
        headers: {},
      });
    });
  })

  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.products.list({
        limit: 3,
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/products',
        data: {
          limit: 3,
        },
        headers: {},
      });
    });

    it('Supports filtering by shippable', function() {
      fusebill.products.list({
        shippable: true,
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/products',
        data: {
          shippable: true,
        },
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      fusebill.products.update('productIdFoo3242', {caption: 'test'});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/products/productIdFoo3242',
        headers: {},
        data: {caption: 'test'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      fusebill.products.del('productIdFoo3242');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/products/productIdFoo3242',
        headers: {},
        data: {},
      });
    });
  });
});
