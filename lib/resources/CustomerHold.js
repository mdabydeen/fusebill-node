'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = require('../FusebillMethod');

module.exports = FusebillResource.extend({

  path: 'customhold',
  includeBasic: [],
  create: fusebillMethod({
      method: 'POST',
      path: '/{customerId}',
      urlParams: ['customerId'],
    }),
});
