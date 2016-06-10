'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({

  path: 'transfers',

  includeBasic: [
    'create', 'list', 'retrieve', 'update',
    'setMetadata', 'getMetadata',
  ],

  reverse: fusebillMethod({
    method: 'POST',
    path: '/{transferId}/reversals',
    urlParams: ['transferId'],
  }),

  cancel: fusebillMethod({
    method: 'POST',
    path: '{transferId}/cancel',
    urlParams: ['transferId'],
  }),

  listTransactions: fusebillMethod({
    method: 'GET',
    path: '{transferId}/transactions',
    urlParams: ['transferId'],
  }),

  /**
   * Transfer: Reversal methods
   */
  createReversal: fusebillMethod({
    method: 'POST',
    path: '/{transferId}/reversals',
    urlParams: ['transferId'],
  }),

  listReversals: fusebillMethod({
    method: 'GET',
    path: '/{transferId}/reversals',
    urlParams: ['transferId'],
  }),

  retrieveReversal: fusebillMethod({
    method: 'GET',
    path: '/{transferId}/reversals/{reversalId}',
    urlParams: ['transferId', 'reversalId'],
  }),

  updateReversal: fusebillMethod({
    method: 'POST',
    path: '/{transferId}/reversals/{reversalId}',
    urlParams: ['transferId', 'reversalId'],
  }),
});

