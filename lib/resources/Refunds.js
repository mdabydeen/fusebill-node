'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({

  path: 'refunds',

  includeBasic: [
    'create', 'list', 'retrieve', 'update',
  ],
});

