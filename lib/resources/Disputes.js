'use strict';

var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;

module.exports = FusebillResource.extend({

  path: 'disputes',

  includeBasic: [
    'list', 'retrieve', 'update', 'setMetadata', 'getMetadata',
  ],

  close: fusebillMethod({
    method: 'POST',
    path: '/{id}/close',
    urlParams: ['id'],
  }),

});

