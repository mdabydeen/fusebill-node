'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;
var utils = require('../utils');

module.exports = FusebillResource.extend({

  path: 'orders',

  includeBasic: [
    'list', 'retrieve', 'update',
  ],

  create: fusebillMethod({
    method: 'POST',
    required: ['currency'],
  }),

  pay: fusebillMethod({
    method: 'POST',
    path: '/{orderId}/pay',
    urlParams: ['orderId'],
  }),

  returnOrder: fusebillMethod({
    method: 'POST',
    path: '/{orderId}/returns',
    urlParams: ['orderId'],
  }),

});
