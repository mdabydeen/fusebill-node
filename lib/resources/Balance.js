'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({

  path: 'balance',

  retrieve: fusebillMethod({
    method: 'GET',
  }),

  listTransactions: fusebillMethod({
    method: 'GET',
    path: 'history',
  }),

  retrieveTransaction: fusebillMethod({
    method: 'GET',
    path: 'history/{transactionId}',
    urlParams: ['transactionId'],
  }),

});
