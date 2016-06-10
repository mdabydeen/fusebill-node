'use strict';

var FusebillResource = require('../FusebillResource');

module.exports = FusebillResource.extend({

  path: 'addresses',
  includeBasic: ['create', 'retrieve', 'update',],
});
