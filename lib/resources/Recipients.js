'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({

  path: 'recipients',
  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
    'setMetadata', 'getMetadata',
  ],

  createCard: fusebillMethod({
    method: 'POST',
    path: '/{recipientId}/cards',
    urlParams: ['recipientId'],
  }),

  listCards: fusebillMethod({
    method: 'GET',
    path: '/{recipientId}/cards',
    urlParams: ['recipientId'],
  }),

  retrieveCard: fusebillMethod({
    method: 'GET',
    path: '/{recipientId}/cards/{cardId}',
    urlParams: ['recipientId', 'cardId'],
  }),

  updateCard: fusebillMethod({
    method: 'POST',
    path: '/{recipientId}/cards/{cardId}',
    urlParams: ['recipientId', 'cardId'],
  }),

  deleteCard: fusebillMethod({
    method: 'DELETE',
    path: '/{recipientId}/cards/{cardId}',
    urlParams: ['recipientId', 'cardId'],
  }),

});

