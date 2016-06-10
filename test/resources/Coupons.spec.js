'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('Coupons Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      fusebill.coupons.retrieve('couponId123');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/coupons/couponId123',
        headers: {},
        data: {},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      fusebill.coupons.del('couponId123');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/coupons/couponId123',
        headers: {},
        data: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      fusebill.coupons.update('couponId123', {
        metadata: {a: '1234'},
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/coupons/couponId123',
        headers: {},
        data: {
          metadata: {a: '1234'},
        },
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      fusebill.coupons.create({
        percent_off: 25,
        duration: 'repeating',
        duration_in_months: 4,
      });

      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/coupons',
        headers: {},
        data: {
          percent_off: 25,
          duration: 'repeating',
          duration_in_months: 4,
        },
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.coupons.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/coupons',
        headers: {},
        data: {},
      });
    });
  });
});
