'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({

  path: 'bitcoin/receivers',

  includeBasic: [
    'create', 'list', 'retrieve',
    'update', 'setMetadata', 'getMetadata',
  ],

  listTransactions: fusebillMethod({
    method: 'GET',
    path: '/{receiverId}/transactions',
    urlParams: ['receiverId'],
  }),
});
