'use strict';

var resources = require('../../lib/fusebill').resources;
var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

var RECIPIENT_TEST_ID = 'recipientIdTest999';

// Create new recipientCard instance with pre-filled recipientId:
var recipientCard = new resources.RecipientCards(
  fusebill,
  {recipientId: RECIPIENT_TEST_ID}
);

// Use spy from existing resource:
recipientCard._request = fusebill.recipients._request;

describe('RecipientCard Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      recipientCard.retrieve('cardIdFoo456');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/recipients/' + RECIPIENT_TEST_ID + '/cards/cardIdFoo456',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      recipientCard.create({
        number: '123456', exp_month: '12',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/recipients/' + RECIPIENT_TEST_ID + '/cards',
        headers: {},
        data: {number: '123456', exp_month: '12'},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      recipientCard.update('cardIdFoo456', {
        name: 'Bob M. Baz',
      });
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/recipients/' + RECIPIENT_TEST_ID + '/cards/cardIdFoo456',
        headers: {},
        data: {name: 'Bob M. Baz'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      recipientCard.del('cardIdFoo456');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/recipients/' + RECIPIENT_TEST_ID + '/cards/cardIdFoo456',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      recipientCard.list();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/recipients/' + RECIPIENT_TEST_ID + '/cards',
        headers: {},
        data: {},
      });
    });
  });
});
