'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;
var utils = require('../utils');

module.exports = FusebillResource.extend({

  path: 'skus',

  includeBasic: [
    'list', 'retrieve', 'update', 'del',
  ],

  create: fusebillMethod({
    method: 'POST',
    required: ['currency', 'inventory', 'price', 'product'],
  }),

});
