'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({

  path: 'application_fees',

  includeBasic: [
    'list', 'retrieve',
  ],

  refund: fusebillMethod({
    method: 'POST',
    path: '/{id}/refund',
    urlParams: ['id'],
  }),

  createRefund: fusebillMethod({
    method: 'POST',
    path: '/{feeId}/refunds',
    urlParams: ['feeId'],
  }),

  listRefunds: fusebillMethod({
    method: 'GET',
    path: '/{feeId}/refunds',
    urlParams: ['feeId'],
  }),

  retrieveRefund: fusebillMethod({
    method: 'GET',
    path: '/{feeId}/refunds/{refundId}',
    urlParams: ['feeId', 'refundId'],
  }),

  updateRefund: fusebillMethod({
    method: 'POST',
    path: '/{feeId}/refunds/{refundId}',
    urlParams: ['feeId', 'refundId'],
  }),
});
