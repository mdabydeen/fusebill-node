'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

describe('Plans Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      fusebill.plans.retrieve('planId1');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans/planId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      fusebill.plans.create({
        amount: 200, currency: 'usd',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {amount: 200, currency: 'usd'},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      fusebill.plans.update('planId3', {
        amount: 1900, currency: 'usd',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans/planId3',
        headers: {},
        data: {amount: 1900, currency: 'usd'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      fusebill.plans.del('planId4');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/plans/planId4',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      fusebill.plans.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans',
        headers: {},
        data: {},
      });
    });
  });
});
