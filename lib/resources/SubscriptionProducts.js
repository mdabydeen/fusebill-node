'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({

  path: 'subscriptionproducts',
  includeBasic: [],
  list: fusebillMethod({
  method: 'GET',
  path: '/{subscriptionId}/items',
  urlParams: ['subscriptionId'],
}),
});
