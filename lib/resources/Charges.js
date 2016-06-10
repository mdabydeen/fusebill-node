'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({

  path: 'charges',

  includeBasic: [
    'create', 'list', 'retrieve', 'update',
    'setMetadata', 'getMetadata',
  ],

  capture: fusebillMethod({
    method: 'POST',
    path: '/{id}/capture',
    urlParams: ['id'],
  }),

  refund: fusebillMethod({
    method: 'POST',
    path: '/{id}/refund',
    urlParams: ['id'],
  }),

  updateDispute: fusebillMethod({
    method: 'POST',
    path: '/{id}/dispute',
    urlParams: ['id'],
  }),

  closeDispute: fusebillMethod({
    method: 'POST',
    path: '/{id}/dispute/close',
    urlParams: ['id'],
  }),

  /**
   * Charge: Refund methods
   * (Deprecated)
   */
  createRefund: fusebillMethod({
    method: 'POST',
    path: '/{chargeId}/refunds',
    urlParams: ['chargeId'],
  }),

  listRefunds: fusebillMethod({
    method: 'GET',
    path: '/{chargeId}/refunds',
    urlParams: ['chargeId'],
  }),

  retrieveRefund: fusebillMethod({
    method: 'GET',
    path: '/{chargeId}/refunds/{refundId}',
    urlParams: ['chargeId', 'refundId'],
  }),

  updateRefund: fusebillMethod({
    method: 'POST',
    path: '/{chargeId}/refunds/{refundId}',
    urlParams: ['chargeId', 'refundId'],
  }),

  markAsSafe: function(chargeId) {
    return this.update(chargeId, {'fraud_details': {'user_report': 'safe'}})
  },

  markAsFraudulent: function(chargeId) {
    return this.update(chargeId, {'fraud_details': {'user_report': 'fraudulent'}})
  },
});
