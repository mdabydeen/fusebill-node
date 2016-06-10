'use strict';
var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({
  path: 'plans',
  includeBasic: ['list', 'retrieve',],
  listProducts: fusebillMethod({
    method: 'GET',
    path: '/{planId}/planProducts',
    urlParams: ['planId'],
  }),
  retrieveProducts: fusebillMethod({
    method: 'GET',
    path: '/planProducts/{planProductId}',
    urlParams: ['planProductId'],
  }),
});

