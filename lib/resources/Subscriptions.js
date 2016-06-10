'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({

  path: 'subscriptions',
  includeBasic: ['create', 'retrieve', 'update', 'del',],

  /**
   * Subscription: Discount methods
   */

  deleteDiscount: fusebillMethod({
    method: 'DELETE',
    path: '/{subscriptionId}/discount',
    urlParams: ['subscriptionId'],
  }),
});
