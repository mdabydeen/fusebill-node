'use strict';

var FusebillResource = require('../FusebillResource');

module.exports = FusebillResource.extend({

  path: 'customeraddresspreferences',
  includeBasic: ['retrieve', 'update',],
});
