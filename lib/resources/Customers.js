'use strict';

var FusebillResource = require('../FusebillResource');
var utils = require('../utils');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({

  path: 'customers',
  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
  ],
  
  /**
   * Customer: Subscription methods
   */

  listSubscriptions: fusebillMethod({
    method: 'GET',
    path: '/{customerId}/subscriptions',
    urlParams: ['customerId'],
  }),

  retrieveSubscription: fusebillMethod({
    method: 'GET',
    path: '/{customerId}/subscriptions/{subscriptionId}',
    urlParams: ['customerId', 'subscriptionId'],
  }),

  /**
   * Customer: Email Preference methods
   */

  listEmailPreferences: fusebillMethod({
    method: 'GET',
    path: '/{customerId}/CustomerEmailPreferences',
    urlParams: ['customerId'],
  }),

  /**
   * Customer: Invoice methods
   */

  listInvoices: fusebillMethod({
    method: 'GET',
    path: '/{customerId}/invoices',
    urlParams: ['customerId'],
  }),
  listDraftInvoices: fusebillMethod({
    method: 'GET',
    path: '/{customerId}/DraftInvoices',
    urlParams: ['customerId'],
  }),

  /**
   * Customer: Card methods
   */

  createCard: fusebillMethod({
    method: 'POST',
    path: '/{customerId}/cards',
    urlParams: ['customerId'],
  }),

  listCards: fusebillMethod({
    method: 'GET',
    path: '/{customerId}/cards',
    urlParams: ['customerId'],
  }),

  retrieveCard: fusebillMethod({
    method: 'GET',
    path: '/{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId'],
  }),

  updateCard: fusebillMethod({
    method: 'POST',
    path: '/{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId'],
  }),

  deleteCard: fusebillMethod({
    method: 'DELETE',
    path: '/{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId'],
  }),

  /**
   * Customer: Source methods
   */

  createSource: fusebillMethod({
    method: 'POST',
    path: '/{customerId}/sources',
    urlParams: ['customerId'],
  }),

  listPaymentMethods: fusebillMethod({
    method: 'GET',
    path: '/{customerId}/paymentmethods',
    urlParams: ['customerId'],
  }),

  retrieveSource: fusebillMethod({
    method: 'GET',
    path: '/{customerId}/sources/{sourceId}',
    urlParams: ['customerId', 'sourceId'],
  }),

  updateSource: fusebillMethod({
    method: 'POST',
    path: '/{customerId}/sources/{sourceId}',
    urlParams: ['customerId', 'sourceId'],
  }),

  deleteSource: fusebillMethod({
    method: 'DELETE',
    path: '/{customerId}/sources/{sourceId}',
    urlParams: ['customerId', 'sourceId'],
  }),

  verifySource: fusebillMethod({
    method: 'POST',
    path: '/{customerId}/sources/{sourceId}/verify',
    urlParams: ['customerId', 'sourceId'],
  }),

  /**
   * Customer: Discount methods
   */

  deleteDiscount: fusebillMethod({
    method: 'DELETE',
    path: '/{customerId}/discount',
    urlParams: ['customerId'],
  }),

  deleteSubscriptionDiscount: fusebillMethod({
    method: 'DELETE',
    path: '/{customerId}/subscriptions/{subscriptionId}/discount',
    urlParams: ['customerId', 'subscriptionId'],
  }),

});
