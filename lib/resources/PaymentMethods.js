'use strict';

var FusebillResource = require('../FusebillResource');

module.exports = FusebillResource.extend({

  path: 'paymentmethods',
  includeBasic: ['retrieve', 'update', 'create', 'del'],
});
