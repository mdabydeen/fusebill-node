'use strict';

var FusebillResource = require('../FusebillResource');

module.exports = FusebillResource.extend({

  path: 'customerbillingsetting',
  includeBasic: ['retrieve', 'update',],
});
