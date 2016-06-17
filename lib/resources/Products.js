'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;
var utils = require('../utils');

module.exports = FusebillResource.extend({

  path: 'products',

  includeBasic: [
    'list', 'retrieve',
  ],

});
