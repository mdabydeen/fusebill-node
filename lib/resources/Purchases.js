'use strict';
var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({
  path: 'purchases',
  includeBasic: ['list', 'retrieve', 'create', 'del', 'update'],
  bulkCreate: fusebillMethod({
    method: 'POST',
    path: '/bulkcreate',
  }),
  finalize: fusebillMethod({
    method: 'POST',
    path: '/purchase',
  }),
});

