'use strict';

var fusebill = require('../testUtils').getSpyableFusebill();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Account Resource', function() {
  function uniqueEmail() {
    return Math.random() + 'bob@example.com';
  }
  describe('create', function() {
    it('Sends the correct request', function() {
      var data = {
        managed: false,
        country: 'US',
        email: uniqueEmail(),
      };
      fusebill.account.create(data);
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/accounts',
        data: data,
        headers: {},
      });
    });
  });

  describe('delete', function() {
    it('deletes an account successfully', function() {
      fusebill.account.del('acct_16Tzq6DBahdM4C8s');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/accounts/acct_16Tzq6DBahdM4C8s',
        data: {},
        headers: {},
      });
    });
  });

  describe('reject', function() {
    it('rejects an account successfully', function() {
      fusebill.account.reject('acct_16Tzq6DBahdM4C8s', {reason: 'fraud'});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/accounts/acct_16Tzq6DBahdM4C8s/reject',
        data: {reason: 'fraud'},
        headers: {},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request with no params', function() {
      fusebill.account.retrieve();
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/account',
        data: {},
        headers: {},
      });
    });

    it('Sends the correct request with ID param', function() {
      fusebill.account.retrieve('foo');
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/accounts/foo',
        data: {},
        headers: {},
      });
    });

    it('Sends the correct request with secret key', function() {
      var key = 'sk_12345678901234567890123456789012';
      fusebill.account.retrieve(null, key);
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        auth: key,
        method: 'GET',
        url: '/v1/account',
        data: {},
        headers: {},
      });
    });

    it('Sends the correct request with secret key as first object', function() {
      var params = {api_key: 'sk_12345678901234567890123456789012'};
      fusebill.account.retrieve(params);
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        auth: params.api_key,
        method: 'GET',
        url: '/v1/account',
        data: {},
        headers: {},
      });
    });

    it('Sends the correct request with a callback', function() {
      fusebill.account.retrieve(function(err, account) {});
      expect(fusebill.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/account',
        data: {},
        headers: {},
      });
    });
  });

  describe('External account methods', function() {
    describe('retrieveExternalAccount', function() {
      it('Sends the correct request', function() {
        fusebill.account.retrieveExternalAccount('accountIdFoo321', 'externalAccountIdFoo456');
        expect(fusebill.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/accountIdFoo321/external_accounts/externalAccountIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', function() {
        fusebill.account.retrieveExternalAccount('accountIdFoo321', 'externalAccountIdFoo456', TEST_AUTH_KEY);
        expect(fusebill.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/accountIdFoo321/external_accounts/externalAccountIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('createExternalAccount', function() {
      it('Sends the correct request', function() {
        fusebill.account.createExternalAccount('accountIdFoo321', {
          number: '123456', currency: 'usd', country: 'US',
        });
        expect(fusebill.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/accountIdFoo321/external_accounts',
          headers: {},
          data: {number: '123456', currency: 'usd', country: 'US'},
        });
      });

      it('Sends the correct request [with specified auth]', function() {
        fusebill.account.createExternalAccount('accountIdFoo321', {
          number: '123456', currency: 'usd', country: 'US',
        }, TEST_AUTH_KEY);
        expect(fusebill.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/accountIdFoo321/external_accounts',
          headers: {},
          data: {number: '123456', currency: 'usd', country: 'US'},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('updateExternalAccount', function() {
      it('Sends the correct request', function() {
        fusebill.account.updateExternalAccount('accountIdFoo321', 'externalAccountIdFoo456', {
          default_for_currency: true,
        });
        expect(fusebill.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/accountIdFoo321/external_accounts/externalAccountIdFoo456',
          headers: {},
          data: {default_for_currency: true},
        });
      });
    });

    describe('deleteExternalAccount', function() {
      it('Sends the correct request', function() {
        fusebill.account.deleteExternalAccount('accountIdFoo321', 'externalAccountIdFoo456');
        expect(fusebill.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/accounts/accountIdFoo321/external_accounts/externalAccountIdFoo456',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', function() {
        fusebill.account.deleteExternalAccount('accountIdFoo321', 'externalAccountIdFoo456', TEST_AUTH_KEY);
        expect(fusebill.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/accounts/accountIdFoo321/external_accounts/externalAccountIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });

    describe('listExternalAccounts', function() {
      it('Sends the correct request', function() {
        fusebill.account.listExternalAccounts('accountIdFoo321');
        expect(fusebill.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/accountIdFoo321/external_accounts',
          headers: {},
          data: {},
        });
      });

      it('Sends the correct request [with specified auth]', function() {
        fusebill.account.listExternalAccounts('accountIdFoo321', TEST_AUTH_KEY);
        expect(fusebill.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/accountIdFoo321/external_accounts',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
        });
      });
    });
  });
});
