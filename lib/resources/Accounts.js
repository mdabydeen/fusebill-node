'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;
var utils = require('../utils');

module.exports = FusebillResource.extend({
  // Since path can either be `account` or `accounts`, support both through fusebillMethod path

  create: fusebillMethod({
    method: 'POST',
    path: 'accounts',
  }),

  list: fusebillMethod({
    method: 'GET',
    path: 'accounts',
  }),

  update: fusebillMethod({
    method: 'POST',
    path: 'accounts/{id}',
    urlParams: ['id'],
  }),

  // Avoid 'delete' keyword in JS
  del: fusebillMethod({
    method: 'DELETE',
    path: 'accounts/{id}',
    urlParams: ['id'],
  }),

  reject: fusebillMethod({
    method: 'POST',
    path: 'accounts/{id}/reject',
    urlParams: ['id'],
  }),

  retrieve: function(id) {
    // No longer allow an api key to be passed as the first string to this function due to ambiguity between
    // old account ids and api keys. To request the account for an api key, send null as the id
    if (typeof id === 'string') {
      return fusebillMethod({
        method: 'GET',
        path: 'accounts/{id}',
        urlParams: ['id'],
      }).apply(this, arguments);
    } else {
      if (id === null || id === undefined) {
        // Remove id as fusebillMethod would complain of unexpected argument
        [].shift.apply(arguments);
      }
      return fusebillMethod({
        method: 'GET',
        path: 'account',
      }).apply(this, arguments);
    }
  },

  /**
   * Accounts: External account methods
   */

  createExternalAccount: fusebillMethod({
    method: 'POST',
    path: 'accounts/{accountId}/external_accounts',
    urlParams: ['accountId'],
  }),

  listExternalAccounts: fusebillMethod({
    method: 'GET',
    path: 'accounts/{accountId}/external_accounts',
    urlParams: ['accountId'],
  }),

  retrieveExternalAccount: fusebillMethod({
    method: 'GET',
    path: 'accounts/{accountId}/external_accounts/{externalAccountId}',
    urlParams: ['accountId', 'externalAccountId'],
  }),

  updateExternalAccount: fusebillMethod({
    method: 'POST',
    path: 'accounts/{accountId}/external_accounts/{externalAccountId}',
    urlParams: ['accountId', 'externalAccountId'],
  }),

  deleteExternalAccount: fusebillMethod({
    method: 'DELETE',
    path: 'accounts/{accountId}/external_accounts/{externalAccountId}',
    urlParams: ['accountId', 'externalAccountId'],
  }),

});
