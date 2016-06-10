'use strict';
var FusebillResource = require('../FusebillResource');

module.exports = FusebillResource.extend({
  path: 'planProducts',
  includeBasic: ['retrieve'],
});

