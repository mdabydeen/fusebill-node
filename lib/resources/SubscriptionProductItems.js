'use strict';

var FusebillResource = require('../FusebillResource');

module.exports = FusebillResource.extend({

  path: 'subscriptionproductitems',
  includeBasic: ['create', 'retrieve', 'update', 'del',],
});
