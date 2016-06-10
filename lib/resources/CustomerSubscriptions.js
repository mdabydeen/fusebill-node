'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

/**
 * CustomerSubscription is a unique resource in that, upon instantiation,
 * requires a customerId, and therefore each of its methods only
 * require the subscriptionId argument.
 *
 * This streamlines the API specifically for the case of accessing cards
 * on a returned customer object.
 *
 * E.g. customerObject.cards.retrieve(cardId)
 * (As opposed to the also-supported fusebill.customers.retrieveCard(custId, cardId))
 */
module.exports = FusebillResource.extend({
  path: 'customers/{customerId}/subscriptions',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],

  /**
   * Customer: Discount methods
   */

  deleteDiscount: fusebillMethod({
    method: 'DELETE',
    path: '/{subscriptionId}/discount',
    urlParams: ['customerId', 'subscriptionId'],
  }),
});
